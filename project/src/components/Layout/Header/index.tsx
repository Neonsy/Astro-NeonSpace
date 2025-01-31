import { motion } from 'motion/react';

import { fadeInConfig } from '@/lib/animations/simple';

import Container from '@/components/Layout/Container';
import Nav from '@/components/Layout/Header/Nav';

type HeaderProps = {
    currentPath: string;
};

export default function Header({ currentPath }: HeaderProps) {
    return (
        <motion.header
            {...fadeInConfig}
            className='sticky top-0 z-50 border-b border-white/30 bg-header-primary py-6 shadow-lg lg:bg-header-primary/60 lg:backdrop-blur-lg'>
            <Container>
                <Nav currentPath={currentPath} />
            </Container>
        </motion.header>
    );
}
