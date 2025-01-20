import { motion } from 'motion/react';

import { fadeInConfig } from '@/lib/animations/simple';
import { FaGithub, FaDiscord, FaInstagram } from 'react-icons/fa6';

import Link from '@/components/Common/Link';
import ExploreButton from '@/components/Common/ExploreButton';

export default function Greeting() {
    const animationConfig = {
        delay: {
            heading: 0.1,
            github: 0.18,
            discord: 0.24,
            instagram: 0.3,
            lookingForOpportunity: 0.36,
        },
    };

    return (
        <section id='top' className='flex min-h-[90svh] flex-col items-center justify-around gap-y-8 text-center ~sm/md:~px-10/4'>
            <div className='flex flex-col items-center justify-center gap-y-6 ~pt-0/36'>
                <motion.div {...fadeInConfig({ delay: animationConfig.delay.heading })} className='flex flex-col gap-y-6'>
                    <h1 className='gradient-text font-bold ~text-5xl/9xl'>Timothy Enderson</h1>
                    <p className='text-text-secondary ~text-xl/2xl'>Full-Stack Web Developer with a passion for creating digital experiences</p>
                </motion.div>

                <div className='flex gap-8'>
                    <Link
                        aria-label='Github'
                        title='Github'
                        hasMotion
                        motionProps={fadeInConfig({ delay: animationConfig.delay.github })}
                        href='https://github.com/neonsy'
                        external>
                        <FaGithub className='text-text-primary transition-colors ~h-8/10 ~w-8/10 hover:text-cyan-400' />
                    </Link>
                    <Link
                        aria-label='Discord '
                        title='Discord'
                        hasMotion
                        motionProps={fadeInConfig({ delay: animationConfig.delay.discord })}
                        href='https://discord.com/users/your-id'
                        external>
                        <FaDiscord className='text-text-primary transition-colors ~h-8/10 ~w-8/10 hover:text-cyan-400' />
                    </Link>
                    <Link
                        aria-label='Instagram'
                        title='Instagram'
                        hasMotion
                        motionProps={fadeInConfig({ delay: animationConfig.delay.instagram })}
                        href='https://instagram.com/your-profile'
                        external>
                        <FaInstagram className='text-text-primary transition-colors ~h-8/10 ~w-8/10 hover:text-cyan-400' />
                    </Link>
                </div>

                <motion.div
                    className='bg-background-secondary/50 rounded-full border border-cyan-400/20 px-6 py-2'
                    {...fadeInConfig({ delay: animationConfig.delay.lookingForOpportunity })}>
                    <span className='text-cyan-400 ~text-sm/base'>Looking for a Frontend || Full-Stack Developer Opportunity</span>
                </motion.div>
            </div>
            <ExploreButton href='#overview' />
        </section>
    );
}
