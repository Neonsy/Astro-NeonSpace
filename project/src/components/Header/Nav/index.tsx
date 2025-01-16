import { motion } from 'motion/react';

import { fadeInUpConfig } from '@/lib/animations/basic';

import Link from '@/components/Link';

export default function Nav() {
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
            <div>
                <Link href='/'>Home</Link>
                <Link href='/about'>About Me</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/contact'>Contact</Link>
            </div>
        </nav>
    );
}
