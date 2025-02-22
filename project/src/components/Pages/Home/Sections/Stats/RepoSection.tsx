import { motion } from 'motion/react';

import { fadeInConfig } from '@/lib/animations/simple';

import { FaCode, FaCodeFork, FaCodePullRequest, FaEye, FaStar } from 'react-icons/fa6';
import { VscIssues } from 'react-icons/vsc';

import Link from '@/components/Common/Link';

import type { Repository } from '@/types/githubStats';

type RepoSectionProps = {
    title: string;
    repos: Repository[];
    username: string;
};

export default function RepoSection({ title, repos }: RepoSectionProps) {
    const animationConfig = {
        title: fadeInConfig({ delay: 0.1 }),
        content: fadeInConfig({ delay: 0.2 }),
        stats: fadeInConfig({ delay: 0.3 }),
    };

    return (
        <motion.div {...fadeInConfig} className='flex flex-col gap-y-4'>
            <motion.h3 {...animationConfig.title} className='text-xl font-semibold text-text-primary'>
                {title}
            </motion.h3>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
                {repos.map((repo) => (
                    <motion.div key={repo.name} {...animationConfig.content} className='group card-padded flex flex-col gap-y-6'>
                        <h4 className='flex items-center gap-2 font-medium text-text-primary ~text-base/3xl'>
                            <FaCode className='h-4 w-4 text-blue-400' />
                            <Link href={repo.url} external>
                                {repo.name}
                            </Link>
                        </h4>
                        <motion.p {...animationConfig.content} className='line-clamp-2 text-text-secondary' title={repo.description}>
                            {repo.description}
                        </motion.p>
                        <motion.div {...animationConfig.stats} className='mt-auto flex items-center gap-4 text-sm text-text-secondary'>
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
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
