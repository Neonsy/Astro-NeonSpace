import { useGithubStats } from '@/hooks/useGithubStats';
import GithubStatsLoader from '@/components/GitStats/Loader';
import '@/styles/GithubStats.css';

type GithubStatsProps = {
    username: string;
    authToken: string;
};

export default function GithubStats({ username, authToken }: GithubStatsProps) {
    const { data: stats, isLoading, isError, error, refetch } = useGithubStats(username, authToken);

    if (isLoading) {
        return <GithubStatsLoader />;
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

            <section className='stats-section'>
                <h3>Repository Statistics</h3>
                <div className='stats-grid'>
                    <div className='stat-item'>
                        <span className='stat-label'>Public Repos</span>
                        <span className='stat-value'>{stats.repositories.public}</span>
                    </div>
                    <div className='stat-item'>
                        <span className='stat-label'>Private Repos</span>
                        <span className='stat-value'>{stats.repositories.private}</span>
                    </div>
                    <div className='stat-item'>
                        <span className='stat-label'>Total Repos</span>
                        <span className='stat-value'>{stats.repositories.total}</span>
                    </div>
                </div>
            </section>

            <section className='stats-section'>
                <h3>Social</h3>
                <div className='stats-grid'>
                    <div className='stat-item'>
                        <span className='stat-label'>Total Stars</span>
                        <span className='stat-value'>{stats.social.stars}</span>
                    </div>
                    <div className='stat-item'>
                        <span className='stat-label'>Followers</span>
                        <span className='stat-value'>{stats.social.followers}</span>
                    </div>
                </div>
            </section>

            <section className='stats-section'>
                <h3>Pull Requests</h3>
                <div className='stats-grid'>
                    <div className='stat-item'>
                        <span className='stat-label'>Open</span>
                        <span className='stat-value'>{stats.pullRequests.open}</span>
                    </div>
                    <div className='stat-item'>
                        <span className='stat-label'>Closed</span>
                        <span className='stat-value'>{stats.pullRequests.closed}</span>
                    </div>
                    <div className='stat-item'>
                        <span className='stat-label'>Merged</span>
                        <span className='stat-value'>{stats.pullRequests.merged}</span>
                    </div>
                </div>
            </section>

            <section className='stats-section'>
                <h3>Issues</h3>
                <div className='stats-grid'>
                    <div className='stat-item'>
                        <span className='stat-label'>Open</span>
                        <span className='stat-value'>{stats.issues.open}</span>
                    </div>
                    <div className='stat-item'>
                        <span className='stat-label'>Closed</span>
                        <span className='stat-value'>{stats.issues.closed}</span>
                    </div>
                    <div className='stat-item'>
                        <span className='stat-label'>Total</span>
                        <span className='stat-value'>{stats.issues.total}</span>
                    </div>
                </div>
            </section>

            <section className='stats-section'>
                <h3>Popular Repositories</h3>
                <div className='repos-list'>
                    {stats.popularRepos.map((repo) => (
                        <div key={repo.name} className='repo-item'>
                            <h4>
                                <a href={repo.url} target='_blank' rel='noopener noreferrer'>
                                    {repo.name}
                                </a>
                            </h4>
                            {repo.primaryLanguage && (
                                <div className='repo-language'>
                                    <span>{repo.primaryLanguage}</span>
                                </div>
                            )}
                            {repo.description && <p className='repo-description'>{repo.description}</p>}
                            <div className='repo-stats'>
                                <a href={repo.urls.stars} target='_blank' rel='noopener noreferrer' title='Stars'>
                                    ⭐ {repo.stars}
                                </a>
                                <a href={repo.urls.forks} target='_blank' rel='noopener noreferrer' title='Forks'>
                                    🍴 {repo.forks}
                                </a>
                                <a href={repo.urls.watchers} target='_blank' rel='noopener noreferrer' title='Watchers'>
                                    👀 {repo.watchers}
                                </a>
                                <a href={repo.urls.pulls} target='_blank' rel='noopener noreferrer' title='Pull Requests'>
                                    🔄 {repo.totalPRs}
                                </a>
                                <a href={repo.urls.issues} target='_blank' rel='noopener noreferrer' title='Issues'>
                                    ❗ {repo.totalIssues}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='stats-section'>
                <h3>Most Active Repositories</h3>
                <div className='repos-list'>
                    {stats.activeRepos.map((repo) => (
                        <div key={repo.name} className='repo-item'>
                            <h4>
                                <a href={repo.url} target='_blank' rel='noopener noreferrer'>
                                    {repo.name}
                                </a>
                            </h4>
                            {repo.primaryLanguage && (
                                <div className='repo-language'>
                                    <span>{repo.primaryLanguage}</span>
                                </div>
                            )}
                            {repo.description && <p className='repo-description'>{repo.description}</p>}
                            <div className='repo-stats'>
                                <a href={repo.urls.stars} target='_blank' rel='noopener noreferrer' title='Stars'>
                                    ⭐ {repo.stars}
                                </a>
                                <a href={repo.urls.forks} target='_blank' rel='noopener noreferrer' title='Forks'>
                                    🍴 {repo.forks}
                                </a>
                                <a href={repo.urls.watchers} target='_blank' rel='noopener noreferrer' title='Watchers'>
                                    👀 {repo.watchers}
                                </a>
                                <a href={repo.urls.pulls} target='_blank' rel='noopener noreferrer' title='Pull Requests'>
                                    🔄 {repo.totalPRs}
                                </a>
                                <a href={repo.urls.issues} target='_blank' rel='noopener noreferrer' title='Issues'>
                                    ❗ {repo.totalIssues}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='stats-section'>
                <h3>Languages</h3>
                <div className='languages-grid'>
                    {Object.entries(stats.languages)
                        .sort(([, a], [, b]) => b - a)
                        .map(([language, percentage]) => (
                            <div key={language} className='language-item'>
                                <span className='language-name'>{language}</span>
                                <div className='language-bar'>
                                    <div className='language-progress' style={{ width: `${percentage}%` }} />
                                </div>
                                <span className='language-percentage'>{percentage.toFixed(1)}%</span>
                            </div>
                        ))}
                </div>
            </section>
        </div>
    );
}
