'use client';

import { primaryNav, repositoryNav } from '@/lib/links';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Links from '@/components/links';
import { motion, AnimatePresence } from 'motion/react';

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('#mobile-nav') && !target.closest('#nav-toggle')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <div className='lg:hidden'>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                id='nav-toggle'
                className='relative h-8 w-8 text-2xl focus:outline-none'
                aria-label='Toggle menu'>
                <AnimatePresence initial={false}>
                    {isOpen ? (
                        <motion.div
                            key='close'
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{
                                duration: 0.15,
                                ease: 'easeInOut',
                            }}
                            className='absolute inset-0 flex items-center justify-center'>
                            <FaTimes />
                        </motion.div>
                    ) : (
                        <motion.div
                            key='menu'
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{
                                duration: 0.15,
                                ease: 'easeInOut',
                            }}
                            className='absolute inset-0 flex items-center justify-center'>
                            <FaBars />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        id='mobile-nav'
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className='fixed left-0 top-[80.1px] w-full bg-header backdrop-blur-md'>
                        <div className='flex flex-col p-6'>
                            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                                <Links links={primaryNav} className='flex flex-col items-center gap-6 py-8 text-lg' />
                            </motion.div>
                            <motion.div
                                className='flex flex-col items-center gap-4 border-t border-white/10 pt-6'
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}>
                                <p className='text-sm font-medium opacity-70'>Project Repository</p>
                                <Links links={repositoryNav} className='flex items-center gap-6 text-2xl' />
                            </motion.div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
}
