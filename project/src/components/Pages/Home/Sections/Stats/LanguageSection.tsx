import { motion } from 'motion/react';

import { fadeInUpConfig } from '@/lib/animations/simple';

type LanguageSectionProps = {
    languages: Record<string, number>;
};

export default function LanguageSection({ languages }: LanguageSectionProps) {
    return (
        <motion.div {...fadeInUpConfig} className='flex flex-col gap-y-4'>
            <motion.h3
                {...fadeInUpConfig}
                transition={{ ...fadeInUpConfig.transition, delay: 0.1 }}
                className='text-xl font-semibold text-text-primary'>
                Languages
            </motion.h3>
            <motion.div
                {...fadeInUpConfig}
                transition={{ ...fadeInUpConfig.transition, delay: 0.18 }}
                className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
                {Object.entries(languages)
                    .sort(([, a], [, b]) => b - a)
                    .map(([language, percentage]) => (
                        <LanguageBar key={language} language={language} percentage={percentage} />
                    ))}
            </motion.div>
        </motion.div>
    );
}

function LanguageBar({ language, percentage }: { language: string; percentage: number }) {
    return (
        <div className='grid grid-cols-[0.72fr_1fr_0.1fr] items-center rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] sm:grid-cols-[0.6fr_1fr_0.1fr] md:grid-cols-[0.2fr_1fr_0.1fr] lg:grid-cols-[0.3fr_1fr_0.1fr] xl:grid-cols-[0.2fr_1fr_0.1fr]'>
            <span className='text-sm font-medium text-text-secondary'>{language}</span>
            <div className='h-2 w-full rounded-full bg-white/[0.03]'>
                <motion.div
                    {...fadeInUpConfig}
                    transition={{ ...fadeInUpConfig.transition, delay: 0.25 }}
                    className='h-full rounded-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 backdrop-blur-sm'
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
