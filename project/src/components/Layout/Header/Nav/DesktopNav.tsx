import { motion } from 'motion/react';

import { fadeInConfig, fadeInThenBounceConfig, slideInLeftConfig } from '@/lib/animations/simple';
import { FaGithub } from 'react-icons/fa6';

import Link from '@/components/Common/Link';

import type { NavItem } from '@/types/navItems';

type Props = {
    currentPath: string;
    navItems: ReadonlyArray<NavItem>;
};

type ItemProps = NavItem & {
    currentPath: string;
    index: number;
};

function DesktopNavItem({ href, label, currentPath, index }: ItemProps) {
    const animationConfig = {
        links: [
            fadeInConfig({ delay: 0.1 }),
            fadeInConfig({ delay: 0.2 }),
            fadeInConfig({ delay: 0.3 }),
            fadeInConfig({ delay: 0.4 }),
            fadeInConfig({ delay: 0.5 }),
        ],
    };

    return (
        <motion.li {...animationConfig.links[index]}>
            <Link href={href} className={`~text-lg/2xl hover:underline ${currentPath === href ? 'font-bold' : ''}`}>
                {label}
            </Link>
        </motion.li>
    );
}

export default function DesktopNav({ currentPath, navItems }: Props) {
    const animationConfig = {
        logo: fadeInConfig({ delay: 0.1 }),
        github: fadeInThenBounceConfig({ delay: 0.6 }),
    };

    return (
        <nav className='hidden items-center justify-between ~px-10/4 ~py-2/3 lg:flex'>
            {/* Logo */}
            <div>
                <Link href='/' className='gradient-text w-fit font-bold ~text-3xl/5xl' hasMotion motionProps={animationConfig.logo}>
                    NeonSpace
                </Link>
            </div>

            {/* Navigation Items */}
            <ul className='flex items-center gap-x-10'>
                {navItems.map((item, index) => (
                    <DesktopNavItem key={item.href} {...item} currentPath={currentPath} index={index} />
                ))}
            </ul>

            <div className='flex items-center gap-x-10'>
                {/* GitHub Link */}
                <Link
                    hasMotion
                    motionProps={animationConfig.github}
                    href='https://github.com/neonsy/Astro-NeonSpace'
                    external
                    aria-label='Visit Astro-NeonSpace repository on GitHub'
                    title='View source code on GitHub'>
                    <FaGithub className='~text-xl/3xl' />
                </Link>
            </div>
        </nav>
    );
}
