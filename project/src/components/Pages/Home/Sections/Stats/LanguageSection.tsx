import { motion } from 'motion/react';

import { fadeInConfig } from '@/lib/animations/simple';
import ProgressBar from '@/components/Common/ProgressBar';

type LanguageSectionProps = {
    languages: Record<string, number>;
};

export default function LanguageSection({ languages }: LanguageSectionProps) {
    const animationConfig = {
        title: fadeInConfig({ delay: 0.009 }),
        progressBars: fadeInConfig({ delay: 0.018 }),
    };

    return (
        <motion.div {...animationConfig.title} className='flex flex-col gap-y-4'>
            <motion.h3 {...animationConfig.title} className='text-xl font-semibold text-text-primary'>
                Languages
            </motion.h3>
            <motion.div {...animationConfig.progressBars} className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
                {Object.entries(languages)
                    .sort(([, a], [, b]) => b - a)
                    .map(([language, percentage]) => (
                        <ProgressBar key={language} skill={language} percentage={percentage} />
                    ))}
            </motion.div>
        </motion.div>
    );
}
