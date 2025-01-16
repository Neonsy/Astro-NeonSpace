import { motion } from 'motion/react';

import { fadeInUpConfig } from '@/lib/animations/basic';

import { FaStar } from 'react-icons/fa6';
import { VscGithubAlt, VscRepo } from 'react-icons/vsc';

import Link from '@/components/Link';

import type { GithubStats } from '@/types/githubStats';

type ProfileCardProps = {
    stats: GithubStats;
};

export default function ProfileCard({ stats }: ProfileCardProps) {
    return (
        <motion.div {...fadeInUpConfig}>
            <div className='rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]'>
                <div className='flex flex-col items-center justify-center sm:gap-6 md:flex-row'>
                    <Link href={`https://github.com/${stats.userInfo.username}`} external>
                        <img
                            src={stats.userInfo.avatarUrl}
                            alt={stats.userInfo.username}
                            className='h-32 w-32 rounded-full ring-2 ring-purple-500/20 transition-transform hover:scale-105'
                        />
                    </Link>
                    <div className='mt-4 flex flex-1 flex-col items-center sm:items-start'>
                        <div className='flex flex-col items-center gap-4 sm:flex-row'>
                            <Link
                                href={`https://github.com/${stats.userInfo.username}`}
                                external
                                className='flex items-center gap-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent'>
                                <VscGithubAlt className='h-6 w-6 text-text-primary' />
                                {stats.userInfo.username}
                            </Link>
                            <div className='flex items-center gap-4 text-sm text-text-secondary'>
                                <Link
                                    href={`https://github.com/${stats.userInfo.username}?tab=repositories`}
                                    className='flex items-center gap-1'
                                    external>
                                    <VscRepo className='h-4 w-4' />
                                    {stats.repositories}
                                </Link>
                                <Link href={`https://github.com/${stats.userInfo.username}?tab=stars`} className='flex items-center gap-1' external>
                                    <FaStar className='h-4 w-4' />
                                    {stats.social.stars}
                                </Link>
                                <Link
                                    href={`https://github.com/${stats.userInfo.username}?tab=followers`}
                                    className='flex items-center gap-1'
                                    external>
                                    <VscGithubAlt className='h-4 w-4' />
                                    {stats.social.followers}
                                </Link>
                            </div>
                        </div>
                        <p className='mt-2 text-sm text-text-secondary'>
                            Joined{' '}
                            {new Date(stats.userInfo.joinedAt).toLocaleDateString('en-US', {
                                month: 'long',
                                year: 'numeric',
                            })}
                        </p>
                        {stats.userInfo.description && <p className='mt-2 text-text-primary'>{stats.userInfo.description}</p>}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}