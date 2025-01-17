import { motion } from 'motion/react';

import Link from '@/components/Link';

import { FaGithub } from 'react-icons/fa6';
import { fadeInThenBounceConfig, fadeInUpConfig, slideInLeftConfig } from '@/lib/animations/simple';

import type { NavItem } from '@/types/navItems';

type Props = {
    currentPath: string;
    navItems: ReadonlyArray<NavItem>;
};

type ItemProps = NavItem & {
    currentPath: string;
};

function NavItem({ href, label, delay, currentPath }: ItemProps) {
    return (
        <motion.li {...slideInLeftConfig} transition={{ ...slideInLeftConfig.transition, delay }}>
            <Link href={href} className={`~text-lg/2xl hover:underline ${currentPath === href ? 'font-bold' : ''}`}>
                {label}
            </Link>
        </motion.li>
    );
}

export default function DesktopNav({ currentPath, navItems }: Props) {
    return (
        <nav className='hidden items-center justify-between ~px-10/4 ~py-2/3 lg:flex'>
            {/* Logo */}
            <div>
                <Link
                    href='/'
                    className='w-fit bg-gradient-to-r from-logo-gradient-1 via-logo-gradient-2 to-logo-gradient-3 bg-clip-text font-bold text-transparent ~text-3xl/5xl'
                    hasMotion
                    motionProps={{
                        ...fadeInUpConfig,
                        transition: { ...fadeInUpConfig.transition, delay: 0.1 },
                    }}>
                    NeonSpace
                </Link>
            </div>

            {/* Navigation Items */}
            <ul className='flex items-center gap-x-10'>
                {navItems.map((item) => (
                    <NavItem key={item.href} {...item} currentPath={currentPath} />
                ))}
            </ul>

            {/* GitHub Link */}
            <Link
                hasMotion
                motionProps={fadeInThenBounceConfig}
                href='https://github.com/neonsy/Astro-NeonSpace'
                external
                aria-label='Visit the code repository'>
                <FaGithub className='~text-xl/3xl' />
            </Link>
        </nav>
    );
}
