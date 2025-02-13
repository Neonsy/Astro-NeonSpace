import { motion } from 'motion/react';

import { fadeInConfig } from '@/lib/animations/simple';

import SectionTitle from '@/components/Common/SectionTitle';

type JourneyCardProps = {
    startDate: string;
    endDate: string;
    title: string;
    place: string;
    description: string;
};

export default function Journey() {
    return (
        <section className='mx-auto flex flex-col gap-y-9 pb-36 lg:max-w-7xl'>
            <SectionTitle title='Journey' />
            <div className='flex flex-col gap-y-12 px-3'>
                <JourneyCard
                    startDate='2022'
                    endDate='2024'
                    title='Vocational Training as IT Specialist for Application Development'
                    place='Neckargemünd - BW'
                    description="At the start of the second year, I've switched to the application development track, as I've gained a good amount of experience in system integration during the first year to know, that I prefer software development as the primary field. I've also found my passion for web development, as I've learned a lot of new technologies and frameworks, and I've gained a good amount of experience in the field."
                />
                <JourneyCard
                    startDate='2021'
                    endDate='2022'
                    title='Vocational Training as IT Specialist for System Integration'
                    place='Neckargemünd - BW'
                    description="Due to my interest in IT, and the introduction in both system integration and application development during Pre-vocational Training, I felt like this was the right path for me, as I've gathered a good amount of experience over my school years."
                />
            </div>
        </section>
    );
}

export function JourneyCard({ startDate, endDate, title, place, description }: JourneyCardProps) {
    const animationConfig = {
        timeline: fadeInConfig({ delay: 0.18 }),
    };

    return (
        <motion.div {...animationConfig.timeline} className='relative flex gap-2'>
            {/* Timeline line and circle */}
            <div className='relative flex flex-col items-center'>
                <div className='h-4 w-4 rounded-full bg-cyan-400' />
                <div className='h-full w-0.5 bg-gradient-to-b from-cyan-400/50 to-transparent' />
            </div>

            {/* Content card */}
            <div className='card-padded flex flex-1 flex-col gap-y-4'>
                {/* Date range */}
                <p className='text-sm text-cyan-400'>
                    {startDate} - {endDate}
                </p>

                {/* Title and place */}
                <h3 className='mt-2 text-2xl font-bold text-text-primary'>{title}</h3>
                <p className='text-purple-400'>{place}</p>

                {/* Description */}
                <p className='mt-2 text-text-secondary'>{description}</p>
            </div>
        </motion.div>
    );
}
