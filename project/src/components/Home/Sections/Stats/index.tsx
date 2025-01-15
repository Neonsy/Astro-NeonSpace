import { motion } from 'motion/react';
import { fadeInUpConfig } from '@/lib/animations/basic';
import { useGithubStats } from '@/hooks/useGithubStats';
import { FaCodePullRequest, FaCodeFork, FaStar, FaEye, FaCode } from 'react-icons/fa6';
import { VscIssues, VscRepo, VscGithubAlt } from 'react-icons/vsc';

type Repository = {
    name: string;
    url: string;
    description: string;
    stars: number;
    forks: number;
    watchers: number;
    totalPRs: number;
    totalIssues: number;
};

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
        <section id='explore' className='py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    {...fadeInUpConfig}
                    className='mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-center text-3xl font-bold text-transparent'>
                    Developer Profile
                </motion.h2>

                {/* Profile Card */}
                <motion.div {...fadeInUpConfig} className='mb-8'>
                    <div className='relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg'>
                        <div className='flex flex-col items-center sm:flex-row sm:items-start sm:gap-6'>
                            <a href={`https://github.com/${stats.userInfo.username}`} target='_blank' rel='noopener noreferrer'>
                                <img
                                    src={stats.userInfo.avatarUrl}
                                    alt={stats.userInfo.username}
                                    className='h-32 w-32 rounded-full ring-2 ring-purple-500/20 transition-transform hover:scale-105'
                                />
                            </a>
                            <div className='mt-4 flex flex-1 flex-col items-center sm:items-start'>
                                <div className='flex items-center gap-4'>
                                    <a
                                        href={`https://github.com/${stats.userInfo.username}`}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='flex items-center gap-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent transition-opacity hover:opacity-80'>
                                        <VscGithubAlt className='text-text-primary h-6 w-6' />
                                        {stats.userInfo.username}
                                    </a>
                                    <div className='flex items-center gap-4 text-sm text-gray-400'>
                                        <a
                                            href={`https://github.com/${stats.userInfo.username}?tab=repositories`}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='flex items-center gap-1 hover:text-gray-300'>
                                            <VscRepo className='h-4 w-4' />
                                            {stats.repositories}
                                        </a>
                                        <a
                                            href={`https://github.com/${stats.userInfo.username}?tab=stars`}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='flex items-center gap-1 hover:text-gray-300'>
                                            <FaStar className='h-4 w-4' />
                                            {stats.social.stars}
                                        </a>
                                        <a
                                            href={`https://github.com/${stats.userInfo.username}?tab=followers`}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='flex items-center gap-1 hover:text-gray-300'>
                                            <VscGithubAlt className='h-4 w-4' />
                                            {stats.social.followers}
                                        </a>
                                    </div>
                                </div>
                                <p className='mt-2 text-sm text-gray-400'>
                                    Joined{' '}
                                    {new Date(stats.userInfo.joinedAt).toLocaleDateString('en-US', {
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </p>
                                {stats.userInfo.description && <p className='mt-2 text-gray-300'>{stats.userInfo.description}</p>}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Languages Section */}
                <motion.div {...fadeInUpConfig} className='mb-12'>
                    <h3 className='mb-6 text-xl font-semibold text-gray-200'>Languages</h3>
                    <div className='grid gap-3 sm:grid-cols-2'>
                        {Object.entries(stats.languages)
                            .sort(([, a], [, b]) => b - a)
                            .map(([language, percentage]) => (
                                <LanguageBar key={language} language={language} percentage={percentage} />
                            ))}
                    </div>
                </motion.div>

                {/* Repository Sections */}
                <div className='space-y-12'>
                    {/* Popular Repositories */}
                    <RepoSection title='Popular Repositories' repos={stats.popularRepos} username={stats.userInfo.username} />

                    {/* Active Repositories */}
                    <RepoSection title='Active Repositories' repos={stats.activeRepos} username={stats.userInfo.username} />
                </div>
            </div>
        </section>
    );
}

type RepoSectionProps = {
    title: string;
    repos: Repository[];
    username: string;
};

function RepoSection({ title, repos }: RepoSectionProps) {
    return (
        <motion.div {...fadeInUpConfig}>
            <h3 className='mb-6 text-xl font-semibold text-gray-200'>{title}</h3>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {repos.map((repo) => (
                    <div
                        key={repo.name}
                        className='group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]'>
                        <h4 className='flex items-center gap-2 font-medium text-gray-200'>
                            <FaCode className='h-4 w-4 text-blue-400' />
                            <a href={repo.url} target='_blank' rel='noopener noreferrer' className='hover:text-blue-400'>
                                {repo.name}
                            </a>
                        </h4>
                        <p className='mt-2 line-clamp-2 text-sm text-gray-400'>{repo.description}</p>
                        <div className='mt-4 flex items-center gap-4 text-sm text-gray-400'>
                            <a
                                href={`${repo.url}/stargazers`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1 hover:text-gray-300'>
                                <FaStar className='h-4 w-4' />
                                {repo.stars}
                            </a>
                            <a
                                href={`${repo.url}/network/members`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1 hover:text-gray-300'>
                                <FaCodeFork className='h-4 w-4' />
                                {repo.forks}
                            </a>
                            <a
                                href={`${repo.url}/watchers`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1 hover:text-gray-300'>
                                <FaEye className='h-4 w-4' />
                                {repo.watchers}
                            </a>
                            <a
                                href={`${repo.url}/pulls`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1 hover:text-gray-300'>
                                <FaCodePullRequest className='h-4 w-4' />
                                {repo.totalPRs}
                            </a>
                            <a
                                href={`${repo.url}/issues`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1 hover:text-gray-300'>
                                <VscIssues className='h-4 w-4' />
                                {repo.totalIssues}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

function LanguageBar({ language, percentage }: { language: string; percentage: number }) {
    return (
        <div className='flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-4 backdrop-blur-lg'>
            <span className='w-24 text-sm font-medium text-gray-200'>{language}</span>
            <div className='w-[200px] flex-none'>
                <div className='h-2 w-full overflow-hidden rounded-full bg-white/[0.03]'>
                    <div
                        className='h-full rounded-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 backdrop-blur-lg'
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>
            <span className='w-16 text-right text-sm text-gray-400'>{percentage.toFixed(1)}%</span>
        </div>
    );
}
