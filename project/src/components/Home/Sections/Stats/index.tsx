import LanguageSection from '@/components/Home/Sections/Stats/LanguageSection';
import ProfileCard from '@/components/Home/Sections/Stats/ProfileCard';
import RepoSection from '@/components/Home/Sections/Stats/RepoSection';

import type { GithubStats } from '@/types/githubStats';

type GithubStatsProps = {
    stats: GithubStats;
};

export default function Stats({ stats }: GithubStatsProps) {
    return (
        <section id='explore' className='py-20'>
            <div className='mx-auto flex flex-col gap-y-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <h2 className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-center text-3xl font-bold text-transparent'>
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
