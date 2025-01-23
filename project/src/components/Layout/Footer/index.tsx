import { motion } from 'motion/react';
import { fadeInConfig } from '@/lib/animations/simple';
import { SOCIAL_NAV } from '@/lib/nav/items';

import Container from '@/components/Layout/Container';
import Link from '@/components/Common/Link';

import type { TransformOptions } from '@/types/animation';

export default function Footer() {
    const animationConfig = {
        delay: {
            socialNav: 0.009,
            copyright: 0.018,
        },
    };

    return (
        <motion.footer
            {...fadeInConfig}
            className='bg-footer border-t border-white/15 bg-footer-primary py-3 shadow-xl lg:bg-footer-primary/5 lg:backdrop-blur-sm'>
            <Container>
                <div className='flex flex-col items-center justify-center gap-y-4 px-4'>
                    <motion.div
                        className='flex max-w-xl flex-col items-center justify-center gap-y-4'
                        {...fadeInConfig({ delay: animationConfig.delay.socialNav })}>
                        <SocialNav />
                    </motion.div>
                    <motion.div {...fadeInConfig({ delay: animationConfig.delay.copyright })}>
                        <Link
                            href='https://astro-neonspace.vercel.app/'
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
                <Link
                    key={item.href}
                    iconOnly
                    icon={item.icon}
                    href={item.href}
                    className='~text-lg/5xl'
                    external
                    aria-label={item.label}
                    title={item.label}
                />
            ))}
        </div>
    );
}
