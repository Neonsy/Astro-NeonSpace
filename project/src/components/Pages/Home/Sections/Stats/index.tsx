import SectionTitle from '@/components/Common/SectionTitle';
import LanguageSection from '@/components/Pages/Home/Sections/Stats/LanguageSection';
import ProfileCard from '@/components/Pages/Home/Sections/Stats/ProfileCard';
import RepoSection from '@/components/Pages/Home/Sections/Stats/RepoSection';

import type { GithubStats } from '@/types/githubStats';

type GithubStatsProps = {
    stats: GithubStats;
};

export default function Stats({ stats }: GithubStatsProps) {
    return (
        <section id='stats' className='flex items-center justify-center py-36'>
            <div className='flex flex-col gap-y-12 ~px-4/8 lg:max-w-7xl'>
                <SectionTitle title='Developer Profile' />

                <ProfileCard stats={stats} />
                <LanguageSection languages={stats.languages} />

                <div className='flex flex-col gap-y-12'>
                    <RepoSection title='Popular Repositories' repos={stats.popularRepos} username={stats.userInfo.username} />
                    <RepoSection title='Active Repositories' repos={stats.activeRepos} username={stats.userInfo.username} />
                </div>
            </div>
        </section>
    );
}
