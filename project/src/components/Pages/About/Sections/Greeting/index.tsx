import { motion } from 'motion/react';

import { fadeInUpConfig, fadeInConfig } from '@/lib/animations/simple';

import { FaGithub, FaDiscord, FaInstagram } from 'react-icons/fa6';

import Link from '@/components/Link';

type GreetingProps = {
    jobStatus: string;
};

export default function Greeting({ jobStatus }: GreetingProps) {
    return (
        <section className='flex min-h-[90svh] flex-col items-center justify-center gap-y-12 ~sm/md:~px-10/4'>
            <div className='flex select-none flex-col items-center justify-center gap-y-10'>
                <motion.div {...fadeInUpConfig} className='flex flex-col items-center gap-y-8 text-center'>
                    <h1 className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text font-bold text-transparent ~text-5xl/9xl'>
                        Hey there! I'm Timothy Enderson
                    </h1>
                    <p className='max-w-2xl text-center text-text-secondary ~text-xl/3xl'>
                        Full-Stack Web Developer with a passion for creating digital experiences
                    </p>
                </motion.div>

                <motion.p
                    {...fadeInUpConfig}
                    transition={{ ...fadeInUpConfig.transition, delay: 0.1 }}
                    className='max-w-3xl text-center leading-relaxed text-text-primary ~text-lg/xl'>
                    I blend creativity with technical expertise to build modern web solutions. From early days of modding games to managing servers,
                    my journey has shaped me into a developer who loves tackling complex challenges.
                </motion.p>

                <motion.div {...fadeInConfig} transition={{ ...fadeInConfig.transition, delay: 0.2 }} className='flex gap-8'>
                    <Link
                        aria-label='GitHub'
                        href='https://github.com/neonsy'
                        external
                        className='group rounded-full border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-white/[0.06]'>
                        <FaGithub className='text-text-primary transition-colors ~h-7/9 ~w-7/9 group-hover:text-cyan-400' />
                    </Link>
                    <Link
                        aria-label='Discord'
                        href='https://discord.gg/aK3B9QyGU4'
                        external
                        className='group rounded-full border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-white/[0.06]'>
                        <FaDiscord className='text-text-primary transition-colors ~h-7/9 ~w-7/9 group-hover:text-cyan-400' />
                    </Link>
                    <Link
                        aria-label='Instagram'
                        href='https://www.instagram.com/neonsy01/'
                        external
                        className='group rounded-full border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-white/[0.06]'>
                        <FaInstagram className='text-text-primary transition-colors ~h-7/9 ~w-7/9 group-hover:text-cyan-400' />
                    </Link>
                </motion.div>

                <motion.div
                    {...fadeInConfig}
                    transition={{ ...fadeInConfig.transition, delay: 0.3 }}
                    className='group relative rounded-full border border-cyan-400/20 bg-white/[0.03] px-6 py-3 backdrop-blur-sm transition-all hover:border-cyan-400/50'>
                    <div className='absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 blur-xl transition-opacity group-hover:opacity-100' />
                    <span className='text-cyan-400 ~text-sm/base'>{jobStatus}</span>
                </motion.div>
            </div>
        </section>
    );
}
