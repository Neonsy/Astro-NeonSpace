import { motion } from 'motion/react';

import { fadeInThenBounceConfig, fadeInUpConfig, slideInLeftConfig } from '@/lib/animations/simple';

import { FaGithub } from 'react-icons/fa6';

import Link from '@/components/Link';

type NavProps = {
    currentPath: string;
};

export default function Nav({ currentPath }: NavProps) {
    return (
        <nav className='flex items-center justify-between ~px-10/4 ~py-2/3'>
            <div>
                <Link
                    href='/'
                    className='w-fit bg-gradient-to-r from-logo-gradient-1 via-logo-gradient-2 to-logo-gradient-3 bg-clip-text font-bold text-transparent ~text-3xl/5xl'
                    hasMotion
                    motionProps={{ ...fadeInUpConfig, transition: { ...fadeInUpConfig.transition, delay: 0.1 } }}>
                    NeonSpace
                </Link>
            </div>
            <ul className='flex items-center gap-x-10'>
                <motion.li {...slideInLeftConfig} transition={{ ...slideInLeftConfig.transition, delay: 0.1 }}>
                    <Link href='/' className={`~text-lg/2xl hover:underline ${currentPath === '/' ? 'font-bold' : ''}`}>
                        Home
                    </Link>
                </motion.li>
                <motion.li {...slideInLeftConfig} transition={{ ...slideInLeftConfig.transition, delay: 0.2 }}>
                    <Link href='/about' className={`~text-lg/2xl hover:underline ${currentPath === '/about' ? 'font-bold' : ''}`}>
                        About Me
                    </Link>
                </motion.li>

                <motion.li {...slideInLeftConfig} transition={{ ...slideInLeftConfig.transition, delay: 0.4 }}>
                    <Link href='/projects' className={`~text-lg/2xl hover:underline ${currentPath === '/projects' ? 'font-bold' : ''}`}>
                        Projects
                    </Link>
                </motion.li>
                <motion.li {...slideInLeftConfig} transition={{ ...slideInLeftConfig.transition, delay: 0.3 }}>
                    <Link href='/blog' className={`~text-lg/2xl hover:underline ${currentPath === '/blog' ? 'font-bold' : ''}`}>
                        Blog
                    </Link>
                </motion.li>
                <motion.li {...slideInLeftConfig} transition={{ ...slideInLeftConfig.transition, delay: 0.5 }}>
                    <Link href='/contact' className={`~text-lg/2xl hover:underline ${currentPath === '/contact' ? 'font-bold' : ''}`}>
                        Contact
                    </Link>
                </motion.li>
            </ul>

            <Link hasMotion motionProps={fadeInThenBounceConfig} href='https://github.com/neonsy/Astro-NeonSpace' external>
                <FaGithub className='~text-xl/3xl' />
            </Link>
        </nav>
    );
}
