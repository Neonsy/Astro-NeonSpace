import { useGithubStats } from '@/hooks/useGithubStats';

type GithubStatsProps = {
    username: string;
    authToken: string;
};

export default function Stats({ username, authToken }: GithubStatsProps) {
    const { data: stats, isLoading, isError, error, refetch } = useGithubStats(username, authToken);

    if (isLoading) {
        // return <GithubStatsLoader />;
        return <div>Loading...</div>;
    }

    if (isError) {
        return (
            <div className='github-stats-error'>
                <h3>Error loading GitHub stats</h3>
                <p>{error instanceof Error ? error.message : 'Unknown error occurred'}</p>
                <button onClick={() => refetch()} className='retry-button'>
                    Retry
                </button>
            </div>
        );
    }

    if (!stats) {
        return null;
    }

    return (
        <div className='github-stats'>
            <h2>GitHub Statistics for {username}</h2>

            {/* Repository Stats */}
            {stats.repositories.public}
            {stats.repositories.private}
            {stats.repositories.total}

            {/* Social Stats */}
            {stats.social.stars}
            {stats.social.followers}

            {/* Pull Request Stats */}
            {stats.pullRequests.open}
            {stats.pullRequests.closed}
            {stats.pullRequests.merged}

            {/* Issue Stats */}
            {stats.issues.open}
            {stats.issues.closed}
            {stats.issues.total}

            {/* Popular Repos */}
            {stats.popularRepos.map((repo) => (
                <div key={repo.name}>
                    {repo.name}
                    {repo.url}
                    {repo.description}
                    {repo.primaryLanguage}
                    {repo.stars}
                    {repo.forks}
                    {repo.watchers}
                    {repo.totalPRs}
                    {repo.totalIssues}
                    {repo.urls.stars}
                    {repo.urls.forks}
                    {repo.urls.watchers}
                    {repo.urls.pulls}
                    {repo.urls.issues}
                </div>
            ))}

            {/* Active Repos */}
            {stats.activeRepos.map((repo) => (
                <div key={repo.name}>
                    {repo.name}
                    {repo.url}
                    {repo.description}
                    {repo.primaryLanguage}
                    {repo.stars}
                    {repo.forks}
                    {repo.watchers}
                    {repo.totalPRs}
                    {repo.totalIssues}
                    {repo.urls.stars}
                    {repo.urls.forks}
                    {repo.urls.watchers}
                    {repo.urls.pulls}
                    {repo.urls.issues}
                </div>
            ))}

            {/* Languages */}
            {Object.entries(stats.languages).map(([language, percentage]) => (
                <div key={language}>
                    {language}
                    {percentage}
                </div>
            ))}
        </div>
    );
}
