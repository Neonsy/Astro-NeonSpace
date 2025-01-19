import { motion } from 'motion/react';

import { fadeInUpConfig } from '@/lib/animations/simple';
import ProgressBar from '@/components/Common/ProgressBar';

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
                        <ProgressBar key={language} skill={language} percentage={percentage} />
                    ))}
            </motion.div>
        </motion.div>
    );
}
