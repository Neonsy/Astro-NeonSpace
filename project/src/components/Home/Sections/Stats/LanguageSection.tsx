import { motion } from 'motion/react';

import { fadeInUpConfig } from '@/lib/animations/basic';

type LanguageSectionProps = {
    languages: Record<string, number>;
};

export default function LanguageSection({ languages }: LanguageSectionProps) {
    return (
        <motion.div {...fadeInUpConfig} className='mb-12'>
            <h3 className='mb-6 text-xl font-semibold text-gray-200'>Languages</h3>
            <div className='grid gap-3 sm:grid-cols-2'>
                {Object.entries(languages)
                    .sort(([, a], [, b]) => b - a)
                    .map(([language, percentage]) => (
                        <LanguageBar key={language} language={language} percentage={percentage} />
                    ))}
            </div>
        </motion.div>
    );
}

function LanguageBar({ language, percentage }: { language: string; percentage: number }) {
    return (
        <div className='flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-4 backdrop-blur-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]'>
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
