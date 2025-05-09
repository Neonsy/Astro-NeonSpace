import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { fadeInConfig } from '@/lib/animations/simple';

import { FaGithub } from 'react-icons/fa6';
import { IoClose, IoMenu } from 'react-icons/io5';

import Link from '@/components/Common/Link';

import type { NavItem } from '@/types/navItems';

type Props = {
    currentPath: string;
    navItems: ReadonlyArray<NavItem>;
};

export default function MobileNav({ currentPath, navItems }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const animationConfig = {
        logo: fadeInConfig({ delay: 0.1 }),
        line: fadeInConfig({ delay: 0.18 }),
        github: fadeInConfig({ delay: 0.25 }),
    };

    const openCloseAnimation = {
        initial: {
            opacity: 0,
            clipPath: 'inset(0 0 100% 0)',
            transform: 'translateY(-20px)',
        },
        animate: {
            opacity: 1,
            clipPath: 'inset(0 0 0 0)',
            transform: 'translateY(0)',
        },
        exit: {
            opacity: 0,
            clipPath: 'inset(0 0 100% 0)',
            transform: 'translateY(-20px)',
        },
        transition: {
            duration: 0.2,
        },
    };

    return (
        <nav className='lg:hidden' ref={navRef}>
            {/* Mobile Header */}
            <div className='flex items-center justify-between ~px-6/8 ~py-2/3'>
                <Link
                    href='/'
                    className='w-fit bg-gradient-to-r from-logo-gradient-1 via-logo-gradient-2 to-logo-gradient-3 bg-clip-text font-bold text-transparent ~text-2xl/4xl'
                    hasMotion
                    motionProps={animationConfig.logo}>
                    NeonSpace
                </Link>

                <button type='button' onClick={() => setIsOpen(!isOpen)} className='text-2xl' aria-label='Toggle menu' title='Toggle menu'>
                    <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                        {isOpen ? <IoClose /> : <IoMenu />}
                    </motion.div>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div {...openCloseAnimation} className='absolute left-0 right-0 top-full w-full bg-text-inverted shadow-lg'>
                        <div className='flex flex-col'>
                            {/* Main Navigation Links */}
                            <ul className='flex flex-col items-center gap-y-2 ~px-6/8 ~py-4/6'>
                                {navItems.map(({ href, label }, index) => (
                                    <motion.li
                                        key={href}
                                        {...fadeInConfig({ delay: index * 0.05 })}
                                        className='w-full text-center'
                                        onClick={() => setIsOpen(false)}>
                                        <Link href={href} className={`block ~text-lg/xl ~py-3/4 ${currentPath === href ? 'font-bold' : ''}`}>
                                            {label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Separator Line */}
                            <motion.div {...animationConfig.line} className='mx-auto w-1/3 border-t border-text-primary/20' />

                            {/* Repository Link */}
                            <motion.div {...animationConfig.github} className='flex justify-center ~py-4/6'>
                                <Link
                                    href='https://github.com/neonsy/Astro-NeonSpace'
                                    external
                                    className='flex items-center gap-2'
                                    aria-label='Visit Astro-NeonSpace repository on GitHub'
                                    title='View source code on GitHub'>
                                    <FaGithub className='~text-2xl/5xl' />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
