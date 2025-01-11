import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero() {
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0, 5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -500]);

    return (
        <section>
            <motion.div style={{ opacity, y }} className='pointer-events-none absolute inset-0'>
                <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-br from-[#1a1b4b] to-[#4b1b66] opacity-30' />
            </motion.div>

            <div className='flex select-none flex-col items-center justify-center'>
                <h1 className='from-logo-gradient-1 via-logo-gradient-2 to-logo-gradient-3 w-fit bg-gradient-to-r bg-clip-text text-9xl font-bold text-transparent'>
                    NeonSpace
                </h1>
                <p className='text-3xl'>Where Digital Artistry Intersects With The Cosmos, Creating Experiences Beyond This Reality</p>
            </div>
        </section>
    );
}
