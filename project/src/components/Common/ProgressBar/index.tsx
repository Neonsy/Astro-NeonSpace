import { motion } from 'motion/react';

import { fadeInUpConfig } from '@/lib/animations/simple';

type ProgressBarProps = {
    skill: string;
    percentage: number;
};

export default function ProgressBar({ skill, percentage }: ProgressBarProps) {
    return (
        <div className='card-base grid grid-cols-[0.72fr_1fr_0.1fr] items-center p-4 sm:grid-cols-[0.6fr_1fr_0.1fr] md:grid-cols-[0.2fr_1fr_0.1fr] lg:grid-cols-[0.3fr_1fr_0.1fr] xl:grid-cols-[0.2fr_1fr_0.1fr]'>
            <motion.span
                {...fadeInUpConfig}
                transition={{ ...fadeInUpConfig.transition, delay: 0.1 }}
                className='text-sm font-medium text-text-secondary'>
                {skill}
            </motion.span>
            <div className='h-2 w-full rounded-full bg-white/[0.03]'>
                <motion.div
                    {...fadeInUpConfig}
                    transition={{ ...fadeInUpConfig.transition, delay: 0.25 }}
                    className='h-full rounded-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 lg:backdrop-blur-sm'
                    style={{ width: `${percentage}%` }}
                />
            </div>
            <motion.span
                {...fadeInUpConfig}
                transition={{ ...fadeInUpConfig.transition, delay: 0.3 }}
                className='w-16 text-center text-sm text-text-secondary'>
                {percentage.toFixed(1)}%
            </motion.span>
        </div>
    );
}
