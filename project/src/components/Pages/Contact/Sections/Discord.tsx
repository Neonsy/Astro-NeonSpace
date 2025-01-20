import { FaCode, FaRocket, FaHashtag, FaPeopleGroup } from 'react-icons/fa6';
import { MdChatBubble } from 'react-icons/md';

import Link from '@/components/Common/Link';

import type { IconType } from 'react-icons';

export default function Discord() {
    return (
        <section className='flex flex-col items-center justify-center gap-y-6 py-24'>
            <div className='flex flex-col items-center justify-center gap-y-6'>
                <h1 className='gradient-text font-bold ~text-5xl/9xl'>NeonTechSpace</h1>
            </div>
            <div className='bg-discord-primary/15 flex flex-col justify-center gap-y-12 p-12 lg:backdrop-blur-sm'>
                <div className='flex flex-col items-center gap-y-2.5'>
                    <h2 className='flex items-center justify-center gap-x-2 ~text-2xl/5xl'>
                        <IconStyle icon={MdChatBubble} />
                        Discord Community
                    </h2>
                    <p className='max-w-md text-text-secondary ~text-base/xl'>
                        Join the community and connect with fellow developers, creators and enthusiasts, in this vibrant discord server.
                    </p>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col gap-y-6'>
                        <h2 className='~text-2xl/5xl'>Why Join Us</h2>
                        <ul className='flex flex-col gap-y-3'>
                            <li className='flex items-center gap-x-3 ~text-base/xl'>
                                <FaRocket className='text-logo-gradient-1' />
                                Connect with like-minded developers
                            </li>
                            <li className='flex items-center gap-x-3 ~text-base/xl'>
                                <FaCode className='text-logo-gradient-1' />
                                Create or Join collaborative projects
                            </li>
                            <li className='flex items-center gap-x-3 ~text-base/xl'>
                                <FaPeopleGroup className='text-logo-gradient-1' />
                                Start a discussion about various topics
                            </li>
                            <li className='flex items-center gap-x-3 ~text-base/xl'>
                                <FaHashtag className='text-logo-gradient-1' />
                                Teach, grow and learn from each other
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-center gap-y-2.5'>
                        <Link
                            className='bg-discord-primary flex items-center justify-center gap-x-3 rounded-xl px-5 py-3 font-bold ~text-base/3xl'
                            href='https://discord.gg/neonsy'
                            external>
                            <MdChatBubble /> Join Discord Server
                        </Link>
                        <p className='max-w-xs text-center ~text-sm/xl'>Already a member? Open Discord to chat!</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-y-6'>
                    <h2 className='~text-2xl/5xl'>Server Features</h2>
                    <div className='grid grid-cols-3 gap-4'>
                        <FeatureCard title='Home' icon={FaCode} description='News, issues, suggestions, and custom roles' />
                        <FeatureCard title='General' icon={FaCode} description='Casual conversations and community interactions' />
                        <FeatureCard title='Programming' icon={FaCode} description='Discuss various programming languages' />
                        <FeatureCard title='Data Science' icon={FaCode} description='Data analysis and machine learning discussions' />
                        <FeatureCard title='Server & Tools' icon={FaCode} description='Server management and DevOps tools' />
                        <FeatureCard title='Game Dev' icon={FaCode} description='Game design and development discussions' />
                        <FeatureCard title='Design' icon={FaCode} description='Creative projects and design feedback' />
                        <FeatureCard title='Specialized Topics' icon={FaCode} description='Discuss specialized topics like AI, career advice, ask for code reviews, etc.' />
                        <FeatureCard title='Resources &Tickets' icon={FaCode} description='Private and public support channels' />
                    </div>
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
            <p className='max-w-sm ~text-base/xl'>{description}</p>
        </div>
    );
}
