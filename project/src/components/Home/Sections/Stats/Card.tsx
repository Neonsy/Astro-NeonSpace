import type { IconType } from 'react-icons';
import type { GithubStats } from '@/types/githubStats';

type StatKeys = keyof Omit<GithubStats, 'popularRepos' | 'activeRepos' | 'languages'>;

type CardProps = {
    icon: IconType;
    data: GithubStats[StatKeys];
};

export default function Card({ icon: Icon, data }: CardProps) {
    return (
        <div className='flex flex-col gap-6 rounded-2xl border border-github-stats-bg/30 bg-github-stats-bg/5 p-16 shadow-[0_0_15px_rgba(0,0,0,0.2)] backdrop-blur-lg transition-shadow duration-100 hover:shadow-github-stats-bg/10'>
            <Icon className='text-5xl text-github-stats-icon drop-shadow-[0_0_1px_hsl(var(--github-stats-icon))]' />
            {Object.entries(data).map(([key, value]) => (
                <div key={key} className='flex flex-col gap-4'>
                    <p className='flex items-center gap-x-4 text-2xl'>
                        <span className='text-3xl font-bold capitalize text-github-stats-text drop-shadow-[0_0_3px_hsl(var(--github-stats-bg))]'>
                            {value}
                        </span>
                        <span className='capitalize opacity-80'>{key}</span>
                    </p>
                </div>
            ))}
        </div>
    );
}
