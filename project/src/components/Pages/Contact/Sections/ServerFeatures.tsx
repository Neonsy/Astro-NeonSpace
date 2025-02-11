import { fadeInConfig } from '@/lib/animations/simple';
import { motion } from 'motion/react';
import type { IconType } from 'react-icons';
import { FaTools } from 'react-icons/fa';
import {
    FaChartBar,
    FaCode,
    FaCubes,
    FaGamepad,
    FaGlobe,
    FaHouse,
    FaLifeRing,
    FaMicrochip,
    FaPaintbrush,
    FaServer,
    FaTicketSimple,
} from 'react-icons/fa6';
import IconStyle from '@/components/Pages/Contact/Components/IconStyle';

type FeatureCardProps = {
    icon: IconType;
    title: string;
    description: string;
};

export default function ServerFeatures() {
    const features = [
        {
            title: 'Home',
            icon: FaHouse,
            description: 'Your first stop for server news, role selection, issue reporting, and community suggestions',
        },
        {
            title: 'General',
            icon: FaGlobe,
            description: 'The heart of our community where casual conversations and friendships bloom',
        },
        {
            title: 'Programming Languages',
            icon: FaCode,
            description: 'Deep dive into various programming languages, from Python to Rust and everything in between',
        },
        {
            title: 'Frameworks & Libraries',
            icon: FaCubes,
            description: 'Explore the vast ecosystem of development frameworks and libraries together',
        },
        {
            title: 'Development',
            icon: FaTools,
            description: 'Level up your development workflow with tools, tips, and best practices',
        },
        {
            title: 'Data Science',
            icon: FaChartBar,
            description: 'Unlock insights through data analysis, big data tech, and machine learning',
        },
        {
            title: 'Server & DevOps',
            icon: FaServer,
            description: 'Master server management, OS configurations, and DevOps practices',
        },
        {
            title: 'Game Development',
            icon: FaGamepad,
            description: 'Create amazing games with Unity, Unreal Engine, and other game dev tools',
        },
        {
            title: 'Design & Creativity',
            icon: FaPaintbrush,
            description: 'Showcase your creative projects and get feedback on designs, 3D models, and videos',
        },
        {
            title: 'Specialized Topics',
            icon: FaMicrochip,
            description: 'Dive into AI, career advice, code reviews, and other specialized discussions',
        },
        {
            title: 'Support & Resources',
            icon: FaLifeRing,
            description: 'Access helpful resources and get support from our knowledgeable community',
        },
        {
            title: 'Tickets',
            icon: FaTicketSimple,
            description: 'Get personalized help through private staff tickets or community support channels',
        },
    ] as const satisfies ReadonlyArray<FeatureCardProps>;

    const animationConfig = {
        heading: fadeInConfig({ delay: 0.1 }),
    };

    return (
        <section className='flex flex-col items-center justify-center gap-y-6 pb-36'>
            <motion.h2 {...animationConfig.heading} className='~text-2xl/5xl'>
                Server Features
            </motion.h2>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 xs:px-3 md:px-0'>
                {features.map((feature) => (
                    <FeatureCard key={feature.title} {...feature} />
                ))}
            </div>
        </section>
    );
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
    const animationConfig = {
        card: {
            ...fadeInConfig({ delay: 0.12 }),
        },
    };

    return (
        <motion.div {...animationConfig.card} className='card-padded flex flex-col gap-y-6'>
            <h3 className='flex items-center justify-center gap-2 font-medium text-text-primary ~text-base/3xl'>
                <IconStyle icon={Icon} />
                <p className='~text-base/3xl'>{title}</p>
            </h3>
            <p className='max-w-xs text-center ~text-base/lg'>{description}</p>
        </motion.div>
    );
}
