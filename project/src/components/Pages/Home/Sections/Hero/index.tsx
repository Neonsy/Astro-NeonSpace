import { motion } from 'motion/react';

import { fadeInConfig, fadeInUpConfig } from '@/lib/animations/simple';

import ExploreButton from '@/components/Common/ExploreButton';
import Link from '@/components/Common/Link';

export default function Hero() {
    return (
        <section className='flex min-h-[90svh] flex-col items-center justify-around ~sm/md:~px-10/4'>
            <div className='flex flex-col items-center justify-center gap-y-6 ~pt-0/36'>
                <div className='flex flex-col items-center justify-center gap-y-6'>
                    <motion.h1
                        {...fadeInUpConfig}
                        className='bg-gradient-to-r from-logo-gradient-1 via-logo-gradient-2 to-logo-gradient-3 bg-clip-text text-center font-bold text-transparent ~text-5xl/12xl'>
                        NeonSpace
                    </motion.h1>
                    <motion.p {...fadeInUpConfig} transition={{ ...fadeInUpConfig.transition }} className='max-w-2xl text-center ~xs/lg:~text-sm/2xl'>
                        Where Digital Artistry Intersects With The Cosmos, Creating Experiences Beyond This Reality
                    </motion.p>
                </div>
                <div className='mt-4 flex flex-col items-center gap-4 md:flex-row'>
                    <Link
                        href='/contact'
                        hasMotion
                        motionProps={{ ...fadeInConfig, transition: { ...fadeInUpConfig.transition, delay: 0.1 } }}
                        className='rounded-3xl border border-white/15 bg-gradient-to-r from-logo-gradient-1/15 via-logo-gradient-2/15 to-logo-gradient-3/15 font-bold transition-all ~text-base/lg ~px-8/12 ~py-2/3 hover:border-white/20 hover:from-logo-gradient-1/50 hover:via-logo-gradient-2/50 hover:to-logo-gradient-3/50'>
                        Start a Project
                    </Link>
                    <Link
                        href='/about'
                        hasMotion
                        motionProps={{ ...fadeInConfig, transition: { ...fadeInUpConfig.transition, delay: 0.1 } }}
                        className='rounded-3xl border border-cyan-400/50 bg-white/[0.03] font-medium text-cyan-400 transition-all ~text-base/lg ~px-6/8 ~py-2/3 hover:border-cyan-400/80 hover:bg-white/[0.06] hover:text-cyan-300 lg:backdrop-blur-sm'>
                        Get to know me
                    </Link>
                </div>
            </div>
            <ExploreButton href='#stats' />
        </section>
    );
}
