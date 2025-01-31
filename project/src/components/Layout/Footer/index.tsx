import { fadeInConfig } from '@/lib/animations/simple';
import { motion } from 'motion/react';

import Link from '@/components/Common/Link';
import SocialNav from '@/components/Common/SocialNav';
import Container from '@/components/Layout/Container';

export default function Footer() {
    const animationConfig = {
        socialNav: fadeInConfig({ delay: 0.009 }),
        copyright: fadeInConfig({ delay: 0.018 }),
    };

    return (
        <motion.footer
            {...fadeInConfig}
            className='bg-footer border-t border-white/15 bg-footer-primary py-3 shadow-xl lg:bg-footer-primary/5 lg:backdrop-blur-sm'>
            <Container>
                <div className='flex flex-col items-center justify-center gap-y-4 px-4'>
                    <motion.div {...animationConfig.socialNav}>
                        <SocialNav containerClassName='flex flex-row items-center justify-center gap-x-4' linkClassName='~text-lg/5xl' />
                    </motion.div>
                    <motion.div {...animationConfig.copyright}>
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
