import { useGithubStats } from '@/hooks/useGithubStats';

import LanguageSection from '@/components/Home/Sections/Stats/LanguageSection';
import LoadingSkeleton from '@/components/Home/Sections/Stats/LoadingSkeleton';
import ProfileCard from '@/components/Home/Sections/Stats/ProfileCard';
import RepoSection from '@/components/Home/Sections/Stats/RepoSection';

import type { GithubStatsProps } from '@/types/githubStats';

export default function Stats({ username, authToken }: GithubStatsProps) {
    const { data: stats, isLoading, isError } = useGithubStats(username, authToken);

    if (isLoading) return <LoadingSkeleton repoSection={['Popular Repositories', 'Active Repositories']} />;
    if (isError) return <div className='flex h-96 items-center justify-center'>Failed to load stats</div>;
    if (!stats) return null;

    return (
        <section id='explore' className='py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <h2 className='mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-center text-3xl font-bold text-transparent'>
                    Developer Profile
                </h2>

                <ProfileCard stats={stats} />
                <LanguageSection languages={stats.languages} />

                <div className='space-y-12'>
                    <RepoSection title='Popular Repositories' repos={stats.popularRepos} username={stats.userInfo.username} />
                    <RepoSection title='Active Repositories' repos={stats.activeRepos} username={stats.userInfo.username} />
                </div>
            </div>
        </section>
    );
}
