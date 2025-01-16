import { motion } from 'motion/react';
import { fadeInUpConfig } from '@/lib/animations/basic';

export default function Hero() {
    return (
        <section className='flex min-h-dvh flex-col items-center justify-center ~sm/md:~px-10/4'>
            <div className='container mx-auto flex select-none flex-col items-center justify-center gap-y-6'>
                <div className='flex flex-col items-center justify-center gap-y-6'>
                    <motion.h1
                        {...fadeInUpConfig}
                        className='bg-gradient-to-r from-logo-gradient-1 via-logo-gradient-2 to-logo-gradient-3 bg-clip-text text-center font-bold text-transparent ~text-5xl/12xl'>
                        NeonSpace
                    </motion.h1>
                    <motion.p
                        {...fadeInUpConfig}
                        transition={{ ...fadeInUpConfig.transition }}
                        className='max-w-2xl text-center ~xs/lg:~text-sm/2xl'>
                        Where Digital Artistry Intersects With The Cosmos, Creating Experiences Beyond This Reality
                    </motion.p>
                </div>
                <div className='flex flex-col gap-4 md:flex-row'>
                    <motion.a
                        href='#explore'
                        {...fadeInUpConfig}
                        transition={{ ...fadeInUpConfig.transition }}
                        className='inline-flex items-center justify-center rounded-3xl border border-white/15 bg-logo-gradient-3/30 font-bold backdrop-blur-sm transition-all ~h-[40px]/[48px] ~px-8/12 ~py-2/3 hover:border-white/20 hover:bg-logo-gradient-3/50'>
                        <span className='~text-base/lg'>Explore</span>
                    </motion.a>
                    <motion.a
                        href='/contact'
                        {...fadeInUpConfig}
                        transition={{ ...fadeInUpConfig.transition }}
                        className='inline-flex items-center justify-center rounded-3xl border border-cyan-400/50 bg-white/[0.03] font-medium text-cyan-400 backdrop-blur-sm transition-all ~h-[40px]/[48px] ~px-6/8 ~py-2/3 hover:border-cyan-400/80 hover:bg-white/[0.06] hover:text-cyan-300'>
                        <span className='~text-base/lg'>Start a Project</span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
