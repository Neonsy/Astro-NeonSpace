import { motion } from 'motion/react';

import { fadeInConfig } from '@/lib/animations/simple';

type ProgressBarProps = {
    skill: string;
    percentage: number;
};

export default function ProgressBar({ skill, percentage }: ProgressBarProps) {
    const animationConfig = {
        delay: {
            container: 0.09,
            skill: 0.18,
            progressLine: 0.21,
            progressFill: 0.27,
            percentage: 0.36,
        },
    };
    return (
        <motion.div
            {...fadeInConfig({ delay: animationConfig.delay.container })}
            className='card-base grid grid-cols-[0.72fr_1fr_0.1fr] items-center p-4 sm:grid-cols-[0.6fr_1fr_0.1fr] md:grid-cols-[0.2fr_1fr_0.1fr] lg:grid-cols-[0.3fr_1fr_0.1fr] xl:grid-cols-[0.2fr_1fr_0.1fr]'>
            <motion.span {...fadeInConfig({ delay: animationConfig.delay.skill })} className='text-sm font-medium text-text-secondary'>
                {skill}
            </motion.span>
            <motion.div {...fadeInConfig({ delay: animationConfig.delay.progressLine })} className='h-2 w-full rounded-full bg-white/[0.03]'>
                <motion.div
                    {...fadeInConfig({ delay: animationConfig.delay.progressFill })}
                    className='h-full rounded-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 lg:backdrop-blur-sm'
                    style={{ width: `${percentage}%` }}
                />
            </motion.div>
            <motion.span {...fadeInConfig({ delay: animationConfig.delay.percentage })} className='w-16 text-center text-sm text-text-secondary'>
                {percentage.toFixed(1)}%
            </motion.span>
        </motion.div>
    );
}
