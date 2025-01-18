import { motion } from 'motion/react';

import { fadeInUpConfig, fadeInConfig } from '@/lib/animations/simple';
import { FaGithub, FaDiscord, FaInstagram } from 'react-icons/fa6';

import Link from '@/components/Link';

type GreetingProps = {
    jobStatus: string;
};

export default function Greeting({ jobStatus }: GreetingProps) {
    return (
        <section className='flex min-h-[90svh] select-none flex-col items-center justify-center gap-y-8 text-center ~sm/md:~px-10/4'>
            <motion.div {...fadeInUpConfig} className='flex flex-col gap-y-6'>
                <h1 className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text font-bold text-transparent ~text-5xl/9xl'>
                    Timothy Enderson
                </h1>
                <p className='text-text-secondary ~text-xl/2xl'>Full-Stack Web Developer with a passion for creating digital experiences</p>
            </motion.div>

            <motion.div {...fadeInConfig} transition={{ ...fadeInConfig.transition, delay: 0.2 }} className='flex gap-8'>
                <Link href='https://github.com/neonsy' external>
                    <FaGithub className='text-text-primary transition-colors ~h-8/10 ~w-8/10 hover:text-cyan-400' />
                </Link>
                <Link href='https://discord.com/users/your-id' external>
                    <FaDiscord className='text-text-primary transition-colors ~h-8/10 ~w-8/10 hover:text-cyan-400' />
                </Link>
                <Link href='https://instagram.com/your-profile' external>
                    <FaInstagram className='text-text-primary transition-colors ~h-8/10 ~w-8/10 hover:text-cyan-400' />
                </Link>
            </motion.div>

            <motion.div
                {...fadeInConfig}
                transition={{ ...fadeInConfig.transition, delay: 0.3 }}
                className='bg-background-secondary/50 rounded-full border border-cyan-400/20 px-6 py-2'>
                <span className='text-cyan-400 ~text-sm/base'>{jobStatus}</span>
            </motion.div>
        </section>
    );
}
