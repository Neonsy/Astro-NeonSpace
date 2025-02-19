import { motion } from 'motion/react';

import { fadeInConfig } from '@/lib/animations/simple';

import ExploreButton from '@/components/Common/ExploreButton';
import SocialNav from '@/components/Common/SocialNav';

export default function Greeting() {
    const animationConfig = {
        heading: fadeInConfig({ delay: 0.1 }),
        social: fadeInConfig({ delay: 0.18 }),
        status: fadeInConfig({ delay: 0.24 }),
    };

    return (
        <section id='top' className='flex min-h-[93svh] flex-col items-center justify-around gap-y-8 text-center ~sm/md:~px-10/4'>
            <div className='flex flex-col items-center justify-center gap-y-6'>
                <motion.div {...animationConfig.heading} className='flex flex-col gap-y-6'>
                    <h1 className='gradient-text font-bold ~text-5xl/9xl'>Timothy Enderson</h1>
                    <p className='text-text-secondary ~text-xl/2xl'>Full-Stack Web Developer with a passion for creating digital experiences</p>
                </motion.div>

                <motion.div {...animationConfig.social} className='flex gap-8'>
                    <SocialNav containerClassName='flex flex-row items-center justify-center gap-x-4' linkClassName='~text-lg/5xl' />
                </motion.div>

                <motion.div className='bg-background-secondary/50 rounded-full border border-cyan-400/20 px-6 py-2' {...animationConfig.status}>
                    <span className='text-cyan-400 ~text-sm/base'>Looking for a Frontend || Full-Stack Developer Opportunity</span>
                </motion.div>
            </div>
            <ExploreButton href='#overview' />
        </section>
    );
}
