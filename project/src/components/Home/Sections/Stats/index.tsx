import { useGithubStats } from '@/hooks/useGithubStats';

import { RiGitRepositoryFill } from 'react-icons/ri';

type GithubStatsProps = {
    username: string;
    authToken: ImportMetaEnv['GITHUB_FETCH_TOKEN'];
};

export default function Stats({ username, authToken }: GithubStatsProps) {
    const { data: stats, isLoading, isError } = useGithubStats(username, authToken);

    if (isLoading) return <></>;
    if (isError) return <></>;

    return (
        <section className='flex flex-col items-center justify-center'>
            <div className='bg-github-stats-bg/5 border-github-stats-bg/30 hover:shadow-github-stats-bg/30 flex flex-col gap-6 rounded-2xl border p-8 shadow-[0_0_15px_rgba(0,0,0,0.2)] backdrop-blur-lg transition-shadow duration-300'>
                <RiGitRepositoryFill className='text-github-stats-icon text-5xl drop-shadow-[0_0_8px_hsl(var(--github-stats-icon))]' />
                <div className='flex flex-col gap-4'>
                    <p className='flex items-center gap-x-4 text-2xl'>
                        <span className='text-github-stats-text text-3xl font-bold drop-shadow-[0_0_5px_hsl(var(--github-stats-bg))]'>
                            {stats?.repositories.public}
                        </span>
                        <span className='opacity-80'>Public Repositories</span>
                    </p>
                    <p className='flex items-center gap-x-4 text-2xl'>
                        <span className='text-github-stats-text text-3xl font-bold drop-shadow-[0_0_5px_hsl(var(--github-stats-bg))]'>
                            {stats?.repositories.private}
                        </span>
                        <span className='opacity-80'>Private Repositories</span>
                    </p>
                    <p className='flex items-center gap-x-4 text-2xl'>
                        <span className='text-github-stats-text text-3xl font-bold drop-shadow-[0_0_5px_hsl(var(--github-stats-bg))]'>
                            {stats?.repositories.total}
                        </span>
                        <span className='opacity-80'>Total Repositories</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
