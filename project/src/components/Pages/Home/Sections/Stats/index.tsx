import LanguageSection from '@/components/Pages/Home/Sections/Stats/LanguageSection';
import ProfileCard from '@/components/Pages/Home/Sections/Stats/ProfileCard';
import RepoSection from '@/components/Pages/Home/Sections/Stats/RepoSection';

import type { GithubStats } from '@/types/githubStats';

type GithubStatsProps = {
    stats: GithubStats;
};

export default function Stats({ stats }: GithubStatsProps) {
    return (
        <section id='explore' className='py-36'>
            <div className='mx-auto flex flex-col gap-y-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <h2 className='gradient-text-purple text-center text-3xl font-bold'>
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
