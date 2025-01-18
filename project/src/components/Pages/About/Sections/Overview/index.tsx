import { motion } from 'motion/react';

import { fadeInUpConfig } from '@/lib/animations/simple';

export default function Overview() {
    return (
        <section className='flex flex-col items-center gap-y-16 py-24 text-center'>
            {/* Personal Intro */}
            <motion.div {...fadeInUpConfig} className='flex flex-col gap-y-8'>
                <h2 className='text-text-primary ~text-2xl/4xl'>Hey there, you can call me Neon</h2>
                <p className='mx-auto max-w-3xl text-text-secondary ~text-lg/xl'>
                    I'm a Full-Stack Developer who found their passion at the intersection of creativity and technology. What started with modding
                    games and tinkering with servers has evolved into a journey that lead me to becoming a software developer.
                </p>
            </motion.div>

            {/* Interest Categories */}
            <motion.div
                {...fadeInUpConfig}
                transition={{ ...fadeInUpConfig.transition, delay: 0.1 }}
                className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {/* Professional Focus */}
                <div className='bg-background-secondary/50 rounded-xl border border-white/10 p-6'>
                    <h3 className='mb-4 text-cyan-400 ~text-xl/2xl'>Professional Focus</h3>
                    <ul className='flex flex-col gap-y-2 text-text-secondary'>
                        <li>Modern Web Development</li>
                        <li>Synergy between Frontend and Backend</li>
                        <li>State of the Art Technologies</li>
                        <li>UI/UX Implementation</li>
                        <li>Performance Optimization</li>
                    </ul>
                </div>

                {/* Technical Interests */}
                <div className='bg-background-secondary/50 rounded-xl border border-white/10 p-6'>
                    <h3 className='mb-4 text-cyan-400 ~text-xl/2xl'>Tech Passions</h3>
                    <ul className='flex flex-col gap-y-2 text-text-secondary'>
                        <li>System Administration</li>
                        <li>Linux Environments</li>
                        <li>Cloud Architecture</li>
                        <li>Managing Infrastructure</li>
                        <li>Everything else</li>
                    </ul>
                </div>

                {/* Pursuits of curiosity */}
                <div className='bg-background-secondary/50 rounded-xl border border-white/10 p-6'>
                    <h3 className='mb-4 text-cyan-400 ~text-xl/2xl'>Pursuits of curiosity</h3>
                    <ul className='flex flex-col gap-y-2 text-text-secondary'>
                        <li>Design</li>
                        <li>Open Source Projects</li>
                        <li>Learning New Tech</li>
                        <li>Building New Things</li>
                        <li>Exploring the unknown</li>
                    </ul>
                </div>
            </motion.div>

            {/* Additional Context */}
            <motion.p
                {...fadeInUpConfig}
                transition={{ ...fadeInUpConfig.transition, delay: 0.2 }}
                className='mx-auto max-w-3xl text-text-secondary ~text-lg/xl'>
                With a formal background in Application Development and additional expertise in networking (CCNA1), I bring a comprehensive
                understanding of both frontend and backend technologies to every project.
            </motion.p>
        </section>
    );
}
