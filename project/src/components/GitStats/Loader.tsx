import '@/styles/GithubStats.css';

export default function GithubStatsLoader() {
    return (
        <div className='github-stats-loader'>
            <div className='skeleton-header'>
                <div className='skeleton-line' style={{ width: '60%', height: '32px' }} />
            </div>

            {[1, 2, 3, 4, 5].map((section) => (
                <div key={section} className='skeleton-section'>
                    <div className='skeleton-line' style={{ width: '40%', height: '24px' }} />
                    {[1, 2, 3].map((item) => (
                        <div key={item} className='skeleton-line' style={{ width: '30%', height: '16px' }} />
                    ))}
                </div>
            ))}
        </div>
    );
}
