import { motion } from 'motion/react';

import { SOCIAL_NAV } from '@/lib/nav/items';

import Container from '@/components/Layout/Container';
import Link from '@/components/Common/Link';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className='bg-footer bg-footer/50 border-t border-white/30 py-3 shadow-xl backdrop-blur-lg'>
            <Container>
                <div className='flex flex-col items-center justify-center gap-y-4 px-4'>
                    <motion.div
                        className='flex max-w-xl flex-col items-center justify-center gap-y-4'
                        initial={{ opacity: 0, y: -12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.3,
                            delay: 0.2,
                        }}>
                        <SocialNav />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.3,
                            delay: 0.3,
                        }}>
                        <Link
                            href='https://github.com/neonsy'
                            external
                            aria-label='Github'
                            title='Github'
                            className='text-center text-base hover:underline sm:text-lg'>
                            &copy; {new Date().getFullYear()} NeonSpace
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </motion.footer>
    );
}

export function SocialNav() {
    return (
        <div className='flex flex-row items-center justify-center gap-x-4'>
            {SOCIAL_NAV.map((item) => (
                <Link key={item.href} iconOnly icon={item.icon} href={item.href} className='~text-lg/5xl' external aria-label={item.label} title={item.label} />
            ))}
        </div>
    );
}
