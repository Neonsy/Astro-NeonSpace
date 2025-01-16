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
            repositories: userData.public_repos + (userData.total_private_repos || 0),
            social: {
                stars: 0,
                followers: userData.followers,
            },
            popularRepos: [],
            activeRepos: [],
            languages: {},
        };

        // Process each repository
        const repoDetails = await Promise.all(
            repos
                .filter((repo) => repo.name !== 'Neonsy')
                .map(async (repo) => {
                    const [pulls, issues] = await Promise.all([
                        octokit.paginate(octokit.pulls.list, {
                            owner: username,
                            repo: repo.name,
                            state: 'all',
                            per_page: 100,
                        }),
                        octokit.paginate(octokit.issues.listForRepo, {
                            owner: username,
                            repo: repo.name,
                            state: 'all',
                            per_page: 100,
                        }),
                    ]);

                    const filteredIssues = issues.filter((issue) => !('pull_request' in issue));

                    return {
                        name: repo.name,
                        url: repo.html_url,
                        description: repo.description || '',
                        stars: repo.stargazers_count ?? 0,
                        forks: repo.forks_count ?? 0,
                        watchers: repo.subscribers_count ?? 0,
                        totalPRs: pulls.length,
                        totalIssues: filteredIssues.length,
                        activityScore:
                            pulls.filter((pr) => new Date(pr.created_at).getTime() > Date.now() - 28 * 24 * 60 * 60 * 1000).length +
                            filteredIssues.filter((issue) => new Date(issue.created_at).getTime() > Date.now() - 28 * 24 * 60 * 60 * 1000).length,
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
