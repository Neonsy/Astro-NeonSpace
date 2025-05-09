import { motion } from 'motion/react';

import { fadeInConfig } from '@/lib/animations/simple';

import SectionTitle from '@/components/Common/SectionTitle';

export default function Overview() {
    const animationConfig = {
        professionalFocus: fadeInConfig({ delay: 0.009 }),
        technicalExpertise: fadeInConfig({ delay: 0.018 }),
        creativeSide: fadeInConfig({ delay: 0.027 }),
        additionalContext: fadeInConfig({ delay: 0.036 }),
    };

    return (
        <section id='overview' className='relative py-36'>
            <div className='flex flex-col items-center gap-y-16 px-4'>
                <SectionTitle title='Introduction' />
                {/* Main introduction */}
                <motion.div {...fadeInConfig} className='card-padded w-full max-w-3xl text-center'>
                    <h2 className='gradient-text-purple ~text-2xl/4xl'>TL;DR</h2>

                    <p className='mt-6 text-text-secondary ~text-lg/xl'>
                        I'm a junior Full-Stack Developer who found their passion at the intersection of creativity and technology. What started with
                        modding games and tinkering with servers has evolved into a journey that lead me to becoming a software developer.
                    </p>
                </motion.div>

                {/* Interest Categories Grid */}
                <div className='grid w-full max-w-xl grid-cols-1 gap-8 px-4 lg:max-w-5xl lg:grid-cols-3'>
                    {/* Professional Focus */}
                    <motion.div {...animationConfig.professionalFocus} className='card-padded flex flex-col items-center justify-center gap-y-4'>
                        <h3 className='gradient-text-purple mb-4 ~text-xl/2xl'>Professional Focus</h3>
                        <ul className='flex flex-col items-center justify-center gap-y-4 text-text-secondary' aria-label='Professional Focus'>
                            <li className='text-center'>Modern Web Development</li>
                            <li className='text-center'>Synergy between Frontend and Backend</li>
                            <li className='text-center'>State of the Art Technologies</li>
                            <li className='text-center'>UI/UX Implementation</li>
                            <li className='text-center'>Performance Optimization</li>
                        </ul>
                    </motion.div>

                    {/* Technical Expertise */}
                    <motion.div {...animationConfig.technicalExpertise} className='card-padded flex flex-col items-center justify-center gap-y-4'>
                        <h3 className='gradient-text-purple mb-4 ~text-xl/2xl'>Tech Passions</h3>
                        <ul className='flex flex-col items-center justify-center gap-y-4 text-text-secondary' aria-label='Tech Passions'>
                            <li className='text-center'>System Administration</li>
                            <li className='text-center'>Linux Environments</li>
                            <li className='text-center'>Cloud Architecture</li>
                            <li className='text-center'>Managing Infrastructure</li>
                            <li className='text-center'>Everything else</li>
                        </ul>
                    </motion.div>

                    {/* Creative Side */}
                    <motion.div {...animationConfig.creativeSide} className='card-padded flex flex-col items-center justify-center gap-y-4'>
                        <h3 className='gradient-text-purple mb-4 ~text-xl/2xl'>Pursuits of curiosity</h3>
                        <ul className='flex flex-col items-center justify-center gap-y-4 text-text-secondary' aria-label='Pursuits of curiosity'>
                            <li className='text-center'>Design</li>
                            <li className='text-center'>Open Source Projects</li>
                            <li className='text-center'>Learning New Tech</li>
                            <li className='text-center'>Building New Things</li>
                            <li className='text-center'>Exploring the unknown</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Additional Context */}
                <motion.div {...animationConfig.additionalContext} className='card-padded w-full max-w-3xl'>
                    <p className='text-center text-text-secondary ~text-lg/xl'>
                        With a formal background in Application Development and additional expertise in networking, as well as the drive to find a way
                        to solve problems, I bring a sharp mind fueled by curiosity to every project.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
