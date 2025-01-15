import { Octokit } from '@octokit/rest';

import type { GithubStats } from '@/types/githubStats';

export async function fetchGithubStats(username: string, authToken: string): Promise<GithubStats> {
    const octokit = new Octokit({
        auth: authToken,
    });

    try {
        // Get user data (no pagination needed)
        const { data: userData } = await octokit.users.getByUsername({
            username,
        });

        // Get ALL repositories using pagination
        const repos = await octokit.paginate(octokit.repos.listForUser, {
            username,
            sort: 'updated',
            per_page: 100,
        });

        // Initialize stats object
        const stats: GithubStats = {
            userInfo: {
                username: userData.login,
                joinedAt: userData.created_at,
                description: userData.bio,
                avatarUrl: userData.avatar_url,
            },
            repositories: {
                public: userData.public_repos,
                private: userData.total_private_repos || 0,
                total: userData.public_repos + (userData.total_private_repos || 0),
            },
            social: {
                stars: 0,
                followers: userData.followers,
            },
            pullRequests: { total: 0, merged: 0, open: 0, closed: 0 },
            issues: { total: 0, open: 0, closed: 0 },
            popularRepos: [],
            activeRepos: [],
            languages: {},
        };

        // Process each repository
        const repoDetails = await Promise.all(
            repos
                .filter((repo) => repo.name !== 'Neonsy')
                .map(async (repo) => {
                    // Get all pull requests using pagination
                    const pulls = await octokit.paginate(octokit.pulls.list, {
                        owner: username,
                        repo: repo.name,
                        state: 'all',
                        per_page: 100,
                    });

                    // Get all issues using pagination
                    const issues = await octokit.paginate(octokit.issues.listForRepo, {
                        owner: username,
                        repo: repo.name,
                        state: 'all',
                        per_page: 100,
                    });

                    // Get all watchers using pagination
                    const watchers = await octokit.paginate(octokit.activity.listWatchersForRepo, {
                        owner: username,
                        repo: repo.name,
                        per_page: 100,
                    });

                    // Filter out the repo owner from watchers
                    const watchersCount = watchers.filter((watcher) => {
                        return watcher.login.toLowerCase() !== username.toLowerCase();
                    }).length;

                    // Calculate recent activity score (last 4 weeks)
                    const recentPRs = pulls.filter((pr) => new Date(pr.created_at).getTime() > Date.now() - 28 * 24 * 60 * 60 * 1000).length;

                    // Filter issues that aren't PRs and are recent
                    const recentIssues = issues
                        .filter((issue) => !('pull_request' in issue))
                        .filter((issue) => new Date(issue.created_at).getTime() > Date.now() - 28 * 24 * 60 * 60 * 1000).length;

                    // Get total issues (excluding PRs)
                    const totalIssues = issues.filter((issue) => !('pull_request' in issue)).length;

                    // Get total PRs
                    const totalPRs = pulls.length;

                    return {
                        name: repo.name,
                        url: repo.html_url,
                        description: repo.description,
                        primaryLanguage: repo.language ?? null,
                        stars: repo.stargazers_count ?? 0,
                        forks: repo.forks_count ?? 0,
                        watchers: watchersCount,
                        totalPRs,
                        totalIssues,
                        activityScore: recentPRs + recentIssues,
                        urls: {
                            stars: `${repo.html_url}/stargazers`,
                            forks: `${repo.html_url}/network/members`,
                            watchers: `${repo.html_url}/watchers`,
                            pulls: `${repo.html_url}/pulls`,
                            issues: `${repo.html_url}/issues`,
                        },
                    };
                })
        );

        // Get popular repositories (by composite score)
        stats.popularRepos = repoDetails
            .sort((a, b) => {
                // Compare stars first
                if (a.stars !== b.stars) return b.stars - a.stars;
                // If stars are equal, compare forks
                if (a.forks !== b.forks) return b.forks - a.forks;
                // If forks are equal, compare watchers
                if (a.watchers !== b.watchers) return b.watchers - a.watchers;
                // If watchers are equal, compare PRs
                if (a.totalPRs !== b.totalPRs) return b.totalPRs - a.totalPRs;
                // If PRs are equal, compare issues
                return b.totalIssues - a.totalIssues;
            })
            .slice(0, 3);

        // Get recently active repositories (by activity score)
        stats.activeRepos = repoDetails.sort((a, b) => b.activityScore - a.activityScore).slice(0, 3);

        // Update overall stats
        for (const repo of repos.filter((r) => r.name !== 'Neonsy')) {
            // Get language statistics
            if (repo.language) {
                const { data: languages } = await octokit.repos.listLanguages({
                    owner: username,
                    repo: repo.name,
                });

                const total = Object.values(languages).reduce((sum, value) => sum + value, 0);
                Object.entries(languages).forEach(([lang, bytes]) => {
                    stats.languages[lang] = (stats.languages[lang] || 0) + (bytes / total) * 100;
                });
            }

            // Get ALL pull requests using pagination
            const pulls = await octokit.paginate(octokit.pulls.list, {
                owner: username,
                repo: repo.name,
                state: 'all',
                per_page: 100,
            });

            // Get ALL issues using pagination
            const issues = await octokit.paginate(octokit.issues.listForRepo, {
                owner: username,
                repo: repo.name,
                state: 'all',
                per_page: 100,
            });

            const actualIssues = issues.filter((issue) => !('pull_request' in issue));

            stats.pullRequests.open += pulls.filter((pr) => pr.state === 'open').length;
            stats.pullRequests.closed += pulls.filter((pr) => pr.state === 'closed' && !pr.merged_at).length;
            stats.pullRequests.merged += pulls.filter((pr) => pr.merged_at).length;
            stats.pullRequests.total = stats.pullRequests.open + stats.pullRequests.closed + stats.pullRequests.merged;

            stats.issues.open += actualIssues.filter((issue) => issue.state === 'open').length;
            stats.issues.closed += actualIssues.filter((issue) => issue.state === 'closed').length;
            stats.issues.total = stats.issues.open + stats.issues.closed;

            stats.social.stars += repo.stargazers_count ?? 0;
        }

        const languageTotal = Object.values(stats.languages).reduce((sum, value) => sum + value, 0);
        Object.keys(stats.languages).forEach((lang) => {
            stats.languages[lang] = Number(((stats.languages[lang] / languageTotal) * 100).toFixed(2));
        });

        return stats;
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        throw error;
    }
}
