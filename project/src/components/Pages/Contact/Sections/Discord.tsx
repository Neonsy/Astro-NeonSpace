import { motion } from 'motion/react';

import { fadeInConfig } from '@/lib/animations/simple';

import { FaCode, FaHashtag, FaPeopleGroup, FaRocket } from 'react-icons/fa6';
import { MdChatBubble } from 'react-icons/md';

import Link from '@/components/Common/Link';

export default function Discord() {
    const animationConfig = {
        heading: fadeInConfig({ delay: 0.009 }),
        introduction: fadeInConfig({ delay: 0.05 }),
        reasons: fadeInConfig({ delay: 0.09 }),
        features: fadeInConfig({ delay: 0.1 }),
    };

    return (
        <section className='flex flex-col items-center justify-center gap-y-6 py-24'>
            <div className='flex flex-col items-center justify-center gap-y-6'>
                <motion.h1 {...animationConfig.heading} className='gradient-text font-bold ~text-4xl/9xl'>
                    NeonTechSpace
                </motion.h1>
            </div>
            <div className='flex flex-col justify-center gap-y-12 p-12 lg:flex-row'>
                <motion.div {...animationConfig.introduction} className='flex flex-col items-center gap-y-12'>
                    <div className='flex flex-col items-center gap-y-2.5 px-3'>
                        <h2 className='flex items-center justify-center gap-x-2 ~text-xl/5xl'>Discord Community</h2>
                        <p className='max-w-md px-1 text-center text-text-secondary ~text-sm/xl'>
                            Join the community and connect with fellow developers, creators and enthusiasts, in this vibrant discord server.
                        </p>
                    </div>
                    <JoinServerButton className='hidden lg:flex' />
                </motion.div>
                <motion.div {...animationConfig.reasons} className='flex flex-col items-center justify-center gap-y-9 px-3'>
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
                </motion.div>
            </div>
        </section>
    );
}

function JoinServerButton({ className }: { className?: string }) {
    return (
        <div className={`flex flex-col items-center gap-y-3 px-3 ${className}`}>
            <Link
                className='flex items-center justify-center gap-x-3 gap-y-3 rounded-xl bg-discord-primary font-bold ~text-sm/3xl ~px-2/5 ~py-2/3'
                href='https://discord.com/invite/aK3B9QyGU4'
                external>
                <MdChatBubble /> Join Discord Server
            </Link>
            <p className='max-w-xs text-center ~text-xs/xl'>Already a member? Open Discord to chat!</p>
        </div>
    );
}
