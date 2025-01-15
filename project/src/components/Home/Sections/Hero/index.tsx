import { motion } from 'motion/react';
import { fadeInUpConfig } from '@/lib/animations/basic';

export default function Hero() {
    return (
        <section className='flex min-h-dvh flex-col items-center justify-center'>
            <div className='flex select-none flex-col items-center justify-center gap-8'>
                <motion.h1
                    {...fadeInUpConfig}
                    className='w-fit bg-gradient-to-r from-logo-gradient-1 via-logo-gradient-2 to-logo-gradient-3 bg-clip-text text-9xl font-bold text-transparent'>
                    NeonSpace
                </motion.h1>
                <motion.p {...fadeInUpConfig} transition={{ ...fadeInUpConfig.transition }} className='text-3xl'>
                    Where Digital Artistry Intersects With The Cosmos, Creating Experiences Beyond This Reality
                </motion.p>
                <div className='flex gap-4'>
                    <motion.a
                        href='#explore'
                        {...fadeInUpConfig}
                        transition={{ ...fadeInUpConfig.transition }}
                        className='rounded-3xl border border-white/15 bg-logo-gradient-3/30 px-12 py-3 text-lg font-bold backdrop-blur-sm transition-all hover:border-white/20 hover:bg-logo-gradient-3/50'
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#explore')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                        Explore
                    </motion.a>
                    <motion.a
                        href='/contact'
                        {...fadeInUpConfig}
                        transition={{ ...fadeInUpConfig.transition }}
                        className='rounded-3xl border border-cyan-400/50 bg-white/[0.03] px-6 py-3 text-lg font-medium text-cyan-400 backdrop-blur-sm transition-all hover:border-cyan-400/80 hover:bg-white/[0.06] hover:text-cyan-300'>
                        Start a Project
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
