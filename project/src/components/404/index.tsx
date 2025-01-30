import { motion } from 'motion/react';
import { fadeInUpConfig } from '@/lib/animations/simple';
import Link from '@/components/Common/Link';

export default function Animated404() {
    const animationConfig = {
        subHeading: {
            ...fadeInUpConfig,
            transition: { ...fadeInUpConfig.transition, delay: 0.1 },
        },
        content: {
            ...fadeInUpConfig,
            transition: { ...fadeInUpConfig.transition, delay: 0.2 },
        },
    };
    return (
        <section className='px-4 text-center'>
            <motion.div {...fadeInUpConfig}>
                <h1 className='gradient-text font-bold ~text-7xl/12xl'>404</h1>
            </motion.div>

            <motion.p {...animationConfig.subHeading} className='mt-6 text-text-secondary ~text-2xl/4xl'>
                Lost in the Digital Cosmos
            </motion.p>

            <motion.div {...animationConfig.content} className='mt-8 flex flex-col gap-y-4 text-center'>
                <p className='text-text-secondary ~text-xl/3xl'>The page you're seeking has drifted into the quantum void.</p>
                <p className='text-text-secondary ~text-xl/2xl'>Let's navigate back to familiar space.</p>
                <Link
                    href='/'
                    className='mt-8 inline-block rounded-2xl border border-white/20 bg-gradient-to-r from-logo-gradient-1/25 via-logo-gradient-2/25 to-logo-gradient-3/25 px-8 py-4 font-medium text-white transition-all ~text-xl/3xl hover:border-white/30 hover:from-logo-gradient-1/40 hover:to-logo-gradient-3/40'>
                    Return to Homebase
                </Link>
            </motion.div>
        </section>
    );
}
