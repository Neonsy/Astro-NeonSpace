import {
    FaCode,
    FaRocket,
    FaHashtag,
    FaPeopleGroup,
    FaHouse,
    FaGlobe,
    FaCubes,
    FaChartBar,
    FaServer,
    FaGamepad,
    FaPaintbrush,
    FaMicrochip,
    FaLifeRing,
    FaTicketSimple,
} from 'react-icons/fa6';
import { FaTools } from 'react-icons/fa';

import { MdChatBubble } from 'react-icons/md';

import Link from '@/components/Common/Link';

import type { IconType } from 'react-icons';

export default function Discord() {
    return (
        <section className='flex flex-col items-center justify-center gap-y-6 py-24'>
            <div className='flex flex-col items-center justify-center gap-y-6'>
                <h1 className='gradient-text font-bold ~text-4xl/9xl'>NeonTechSpace</h1>
            </div>
            <div className='flex flex-col justify-center gap-y-12 p-12 lg:flex-row'>
                <div className='flex flex-col items-center gap-y-12'>
                    <div className='flex flex-col items-center gap-y-2.5 px-3'>
                        <h2 className='flex items-center justify-center gap-x-2 ~text-xl/5xl'>
                            <IconStyle icon={MdChatBubble} />
                            Discord Community
                        </h2>
                        <p className='max-w-md text-center text-text-secondary ~text-sm/xl'>
                            Join the community and connect with fellow developers, creators and enthusiasts, in this vibrant discord server.
                        </p>
                    </div>
                    <JoinServerButton className='hidden lg:flex' />
                </div>
                <div className='flex flex-col items-center justify-center gap-y-9 px-3'>
                    <h2 className='~text-xl/5xl'>Why Join Us</h2>
                    <ul className='flex flex-col gap-y-3'>
                        <li className='flex items-center gap-x-3 ~text-sm/xl'>
                            <FaRocket className='text-logo-gradient-1' />
                            Connect with like-minded developers
                        </li>
                        <li className='flex items-center gap-x-3 ~text-sm/xl'>
                            <FaCode className='text-logo-gradient-1' />
                            Create or Join collaborative projects
                        </li>
                        <li className='flex items-center gap-x-3 ~text-sm/xl'>
                            <FaPeopleGroup className='text-logo-gradient-1' />
                            Start a discussion about various topics
                        </li>
                        <li className='flex items-center gap-x-3 ~text-sm/xl'>
                            <FaHashtag className='text-logo-gradient-1' />
                            Teach, grow and learn from each other
                        </li>
                    </ul>
                    <JoinServerButton className='lg:hidden' />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-6'>
                <h2 className='~text-2xl/5xl'>Server Features</h2>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
                    <FeatureCard
                        title='Home'
                        icon={FaHouse}
                        description='Your first stop for server news, role selection, issue reporting, and community suggestions'
                    />
                    <FeatureCard
                        title='General'
                        icon={FaGlobe}
                        description='The heart of our community where casual conversations and friendships bloom'
                    />
                    <FeatureCard
                        title='Programming Languages'
                        icon={FaCode}
                        description='Deep dive into various programming languages, from Python to Rust and everything in between'
                    />
                    <FeatureCard
                        title='Frameworks & Libraries'
                        icon={FaCubes}
                        description='Explore the vast ecosystem of development frameworks and libraries together'
                    />
                    <FeatureCard
                        title='Development'
                        icon={FaTools}
                        description='Level up your development workflow with tools, tips, and best practices'
                    />
                    <FeatureCard
                        title='Data Science'
                        icon={FaChartBar}
                        description='Unlock insights through data analysis, big data tech, and machine learning'
                    />
                    <FeatureCard
                        title='Server & DevOps'
                        icon={FaServer}
                        description='Master server management, OS configurations, and DevOps practices'
                    />
                    <FeatureCard
                        title='Game Development'
                        icon={FaGamepad}
                        description='Create amazing games with Unity, Unreal Engine, and other game dev tools'
                    />
                    <FeatureCard
                        title='Design & Creativity'
                        icon={FaPaintbrush}
                        description='Showcase your creative projects and get feedback on designs, 3D models, and videos'
                    />
                    <FeatureCard
                        title='Specialized Topics'
                        icon={FaMicrochip}
                        description='Dive into AI, career advice, code reviews, and other specialized discussions'
                    />
                    <FeatureCard
                        title='Support & Resources'
                        icon={FaLifeRing}
                        description='Access helpful resources and get support from our knowledgeable community'
                    />
                    <FeatureCard
                        title='Tickets'
                        icon={FaTicketSimple}
                        description='Get personalized help through private staff tickets or community support channels'
                    />
                </div>
            </div>
        </section>
    );
}

type IconStyleProps = {
    icon: IconType;
};

function IconStyle({ icon: Icon }: IconStyleProps) {
    return <Icon className='rounded-full bg-body-gradient-3/75 text-logo-gradient-1 ~text-2xl/7xl ~p-1/5' />;
}

type FeatureCardProps = {
    icon: IconType;
    title: string;
    description: string;
};

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
    return (
        <div className='card-padded flex flex-col gap-y-6'>
            <h3 className='flex items-center justify-center gap-2 font-medium text-text-primary ~text-base/3xl'>
                <IconStyle icon={Icon} />
                <h4 className='~text-base/3xl'>{title}</h4>
            </h3>
            <p className='max-w-xs text-center ~text-base/lg'>{description}</p>
        </div>
    );
}

function JoinServerButton({ className }: { className?: string }) {
    return (
        <div className={`flex flex-col items-center gap-y-3 px-3 ${className}`}>
            <Link
                className='flex items-center justify-center gap-x-3 gap-y-3 rounded-xl bg-discord-primary font-bold ~text-sm/3xl ~px-2/5 ~py-2/3'
                href='https://discord.gg/neonsy'
                external>
                <MdChatBubble /> Join Discord Server
            </Link>
            <p className='max-w-xs text-center ~text-xs/xl'>Already a member? Open Discord to chat!</p>
        </div>
    );
}
