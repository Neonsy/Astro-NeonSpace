import { motion } from 'motion/react';

import { fadeInUpConfig } from '@/lib/animations/basic';

import { FaCode, FaCodeFork, FaCodePullRequest, FaEye, FaStar } from 'react-icons/fa6';
import { VscIssues } from 'react-icons/vsc';

import Link from '@/components/Link';

import type { Repository } from '@/types/githubStats';

type RepoSectionProps = {
    title: string;
    repos: Repository[];
    username: string;
};

export default function RepoSection({ title, repos }: RepoSectionProps) {
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
                            <Link href={repo.url} external>
                                {repo.name}
                            </Link>
                        </h4>
                        <p className='mt-2 line-clamp-2 text-sm text-gray-400'>{repo.description}</p>
                        <div className='mt-4 flex items-center gap-4 text-sm text-gray-400'>
                            <span className='flex items-center gap-1'>
                                <FaStar className='h-4 w-4' />
                                {repo.stars}
                            </span>
                            <span className='flex items-center gap-1'>
                                <FaCodeFork className='h-4 w-4' />
                                {repo.forks}
                            </span>
                            <span className='flex items-center gap-1'>
                                <FaEye className='h-4 w-4' />
                                {repo.watchers}
                            </span>
                            <span className='flex items-center gap-1'>
                                <FaCodePullRequest className='h-4 w-4' />
                                {repo.totalPRs}
                            </span>
                            <span className='flex items-center gap-1'>
                                <VscIssues className='h-4 w-4' />
                                {repo.totalIssues}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
