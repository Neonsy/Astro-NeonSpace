import { motion } from 'motion/react';

import { fadeInUpConfig } from '@/lib/animations/basic';

import { useGithubStats } from '@/hooks/useGithubStats';
import { FaCodePullRequest } from 'react-icons/fa6';
import { RiGitRepositoryFill } from 'react-icons/ri';
import { TiSocialGithub } from 'react-icons/ti';
import { VscIssues } from 'react-icons/vsc';

type GithubStatsProps = {
    username: string;
    authToken: ImportMetaEnv['GITHUB_FETCH_TOKEN'];
};

export default function Stats({ username, authToken }: GithubStatsProps) {
    const { data: stats, isLoading, isError } = useGithubStats(username, authToken);

    if (isLoading) return <div className='flex h-96 items-center justify-center'>Loading...</div>;
    if (isError) return <div className='flex h-96 items-center justify-center'>Failed to load stats</div>;
    if (!stats) return null;

    return (
        <section id='explore' className='flex flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8'>
            {/* User Info Card */}

            <motion.h2
                {...fadeInUpConfig}
                transition={{ ...fadeInUpConfig.transition, delay: 0.05 }}
                className='mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-center text-3xl font-bold text-transparent'>
                Developer Profile
            </motion.h2>
            <div className='relative mb-12 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-lg'>
                <motion.div
                    {...fadeInUpConfig}
                    transition={{ ...fadeInUpConfig.transition, delay: 0.05 }}
                    className='flex flex-col items-center gap-6 sm:flex-row sm:items-start'>
                    <a href={`https://github.com/${stats.userInfo.username}`} target='_blank' rel='noopener noreferrer' className='block'>
                        <img
                            src={stats.userInfo.avatarUrl}
                            alt={stats.userInfo.username}
                            className='h-24 w-24 rounded-full ring-2 ring-purple-500/20 transition-transform hover:scale-105'
                        />
                    </a>
                    <div className='flex flex-col items-center sm:items-start'>
                        <a
                            href={`https://github.com/${stats.userInfo.username}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent transition-opacity hover:opacity-80'>
                            {stats.userInfo.username}
                        </a>
                        <p className='mt-1 text-sm capitalize text-gray-400'>
                            Joined{' '}
                            {new Date(stats.userInfo.joinedAt).toLocaleDateString('en-US', {
                                month: 'long',
                                year: 'numeric',
                            })}
                        </p>
                        {stats.userInfo.description && (
                            <p className='mt-4 max-w-2xl text-center text-gray-300 sm:text-left'>{stats.userInfo.description}</p>
                        )}
                    </div>
                </motion.div>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {/* Repositories Card */}
                <motion.div
                    {...fadeInUpConfig}
                    transition={{ ...fadeInUpConfig.transition, delay: 0.05 }}
                    className='relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]'>
                    <div className='mb-4 inline-block rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3'>
                        <RiGitRepositoryFill className='h-6 w-6 text-blue-400' />
                    </div>
                    <div>
                        <h3 className='mb-1 text-sm font-medium text-gray-400'>Repositories</h3>
                        <p className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent'>
                            {stats.repositories.total}
                        </p>
                        <p className='mt-1 text-sm capitalize text-gray-500'>
                            {stats.repositories.public} public / {stats.repositories.private} private
                        </p>
                    </div>
                </motion.div>

                {/* Social Card */}
                <motion.div
                    {...fadeInUpConfig}
                    transition={{ ...fadeInUpConfig.transition, delay: 0.1 }}
                    className='relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]'>
                    <div className='mb-4 inline-block rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3'>
                        <TiSocialGithub className='h-6 w-6 text-blue-400' />
                    </div>
                    <div>
                        <h3 className='mb-1 text-sm font-medium text-gray-400'>Social</h3>
                        <p className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent'>
                            {stats.social.followers}
                        </p>
                        <p className='mt-1 text-sm capitalize text-gray-500'>{stats.social.stars} repository stars</p>
                    </div>
                </motion.div>

                {/* Pull Requests Card */}
                <motion.div
                    {...fadeInUpConfig}
                    transition={{ ...fadeInUpConfig.transition, delay: 0.1 }}
                    className='relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]'>
                    <div className='mb-4 inline-block rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3'>
                        <FaCodePullRequest className='h-6 w-6 text-blue-400' />
                    </div>
                    <div>
                        <h3 className='mb-1 text-sm font-medium text-gray-400'>Pull Requests</h3>
                        <p className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent'>
                            {stats.pullRequests.total}
                        </p>
                        <p className='mt-1 text-sm capitalize text-gray-500'>
                            {stats.pullRequests.merged} merged / {stats.pullRequests.open} open / {stats.pullRequests.closed} closed
                        </p>
                    </div>
                </motion.div>

                {/* Issues Card */}
                <motion.div
                    {...fadeInUpConfig}
                    transition={{ ...fadeInUpConfig.transition, delay: 0.15 }}
                    className='relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]'>
                    <div className='mb-4 inline-block rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3'>
                        <VscIssues className='h-6 w-6 text-blue-400' />
                    </div>
                    <div>
                        <h3 className='mb-1 text-sm font-medium text-gray-400'>Issues</h3>
                        <p className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent'>
                            {stats.issues.total}
                        </p>
                        <p className='mt-1 text-sm capitalize text-gray-500'>
                            {stats.issues.open} open / {stats.issues.closed} closed
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
