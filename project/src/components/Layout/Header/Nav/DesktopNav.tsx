import { motion } from 'motion/react';

import Link from '@/components/Common/Link';

import { FaGithub } from 'react-icons/fa6';
import { fadeInThenBounceConfig, fadeInConfig, slideInLeftConfig } from '@/lib/animations/simple';

import type { NavItem } from '@/types/navItems';

type Props = {
    currentPath: string;
    navItems: ReadonlyArray<NavItem>;
};

type ItemProps = NavItem & {
    currentPath: string;
    index: number;
};

function NavItem({ href, label, currentPath, index }: ItemProps) {
    const animationConfig = {
        delay: {
            logo: 0.1,
            links: [0.1, 0.2, 0.3, 0.4, 0.5],
            github: 0.6,
        },
    };

    return (
        <motion.li {...slideInLeftConfig({ delay: animationConfig.delay.links[index] })}>
            <Link href={href} className={`~text-lg/2xl hover:underline ${currentPath === href ? 'font-bold' : ''}`}>
                {label}
            </Link>
        </motion.li>
    );
}

export default function DesktopNav({ currentPath, navItems }: Props) {
    const animationConfig = {
        delay: {
            logo: 0.1,
            github: 0.2,
        },
    };

    return (
        <nav className='hidden items-center justify-between ~px-10/4 ~py-2/3 lg:flex'>
            {/* Logo */}
            <div>
                <Link
                    href='/'
                    className='gradient-text w-fit font-bold ~text-3xl/5xl'
                    hasMotion
                    motionProps={fadeInConfig({ delay: animationConfig.delay.logo })}>
                    NeonSpace
                </Link>
            </div>

            {/* Navigation Items */}
            <ul className='flex items-center gap-x-10'>
                {navItems.map((item, index) => (
                    <NavItem key={item.href} {...item} currentPath={currentPath} index={index} />
                ))}
            </ul>

            {/* GitHub Link */}
            <Link
                hasMotion
                motionProps={fadeInThenBounceConfig({ delay: animationConfig.delay.github })}
                href='https://github.com/neonsy/Astro-NeonSpace'
                external
                aria-label='Visit Astro-NeonSpace repository on GitHub'
                title='View source code on GitHub'>
                <FaGithub className='~text-xl/3xl' />
            </Link>
        </nav>
    );
}
