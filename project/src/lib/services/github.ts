import { Octokit } from '@octokit/rest';

import type { GithubStats } from '@/types/githubStats';

export async function fetchGithubStats(username: string, authToken: string): Promise<GithubStats> {
    const octokit = new Octokit({
        auth: authToken,
    });

    try {
        // Parallel fetch of user data and repositories
        const [{ data: userData }, repos] = await Promise.all([
            octokit.users.getByUsername({ username }),
            octokit.paginate(octokit.repos.listForUser, {
                username,
                sort: 'updated',
                per_page: 90,
            }),
        ]);

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

        // Filter out Neonsy repo once
        const filteredRepos = repos.filter((repo) => repo.name !== 'Neonsy');

        // Batch fetch languages for all repos in parallel
        const languagePromises = filteredRepos.map((repo) =>
            octokit.repos.listLanguages({
                owner: username,
                repo: repo.name,
            })
        );

        // Process repositories in batches to avoid rate limiting
        const BATCH_SIZE = 5; // Adjust based on rate limits
        const repoDetails = [];

        for (let i = 0; i < filteredRepos.length; i += BATCH_SIZE) {
            const batch = filteredRepos.slice(i, i + BATCH_SIZE);
            const batchPromises = batch.map(async (repo) => {
                const [pulls, issues] = await Promise.all([
                    octokit.paginate(octokit.pulls.list, {
                        owner: username,
                        repo: repo.name,
                        state: 'all',
                        per_page: 45,
                    }),
                    octokit.paginate(octokit.issues.listForRepo, {
                        owner: username,
                        repo: repo.name,
                        state: 'all',
                        per_page: 45,
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
            });

            // Process batch
            const batchResults = await Promise.all(batchPromises);
            repoDetails.push(...batchResults);

            // Optional: Add small delay between batches to help with rate limiting
            if (i + BATCH_SIZE < filteredRepos.length) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }

        // Process all language data in parallel
        const languageResponses = await Promise.all(languagePromises);
        const totalLanguages: Record<string, number> = {};

        // Calculate total stars and process languages
        filteredRepos.forEach((repo, index) => {
            stats.social.stars += repo.stargazers_count ?? 0;

            const languages = languageResponses[index].data;
            Object.entries(languages).forEach(([lang, bytes]) => {
                totalLanguages[lang] = (totalLanguages[lang] || 0) + bytes;
            });
        });

        // Calculate percentages from total bytes
        const totalBytes = Object.values(totalLanguages).reduce((sum, bytes) => sum + bytes, 0);

        // Sort languages by bytes (descending) and calculate percentages
        const sortedLanguages: Record<string, number> = {};
        Object.entries(totalLanguages)
            .sort(([, a], [, b]) => b - a)
            .forEach(([lang, bytes], index, array) => {
                // For all entries except the last one, round to 1 decimal place
                if (index < array.length - 1) {
                    sortedLanguages[lang] = Number(((bytes / totalBytes) * 100).toFixed(1));
                } else {
                    // For the last (smallest) percentage, calculate it to make total exactly 100%
                    const currentTotal = Object.values(sortedLanguages).reduce((sum, val) => sum + val, 0);
                    sortedLanguages[lang] = Number((100 - currentTotal).toFixed(1));
                }
            });

        stats.languages = sortedLanguages;

        // Get popular repositories (by composite score)
        stats.popularRepos = [...repoDetails]
            .sort((a, b) => {
                // Compare stars first
                if (a.stars !== b.stars) return b.stars - a.stars;
                // If stars are equal, compare forks
                if (a.forks !== b.forks) return b.forks - a.forks;
                // If watchers are equal, compare watchers
                if (a.watchers !== b.watchers) return b.watchers - a.watchers;
                // If watchers are equal, compare PRs
                if (a.totalPRs !== b.totalPRs) return b.totalPRs - a.totalPRs;
                // If PRs are equal, compare issues
                return b.totalIssues - a.totalIssues;
            })
            .slice(0, 3);

        // Get recently active repositories (by activity score)
        stats.activeRepos = [...repoDetails].sort((a, b) => b.activityScore - a.activityScore).slice(0, 3);
        return stats;
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        throw error;
    }
}
