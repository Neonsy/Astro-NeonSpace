import { motion } from 'motion/react';

import { fadeInUpConfig } from '@/lib/animations/simple';

import Container from '@/components/Container';
import Nav from '@/components/Header/Nav';

type HeaderProps = {
    currentPath: string;
};

export default function Header({ currentPath }: HeaderProps) {
    return (
        <motion.header {...fadeInUpConfig} className='bg-header-primary/60 sticky top-0 z-50 border-b border-white/30 py-6 shadow-lg backdrop-blur-lg'>
            <Container>
                <Nav currentPath={currentPath} />
            </Container>
        </motion.header>
    );
}
