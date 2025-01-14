import type { MotionProps } from 'motion/react';
import { motion } from 'motion/react';

interface LinkProps extends React.ComponentProps<'a'> {
    children: React.ReactNode;
    href: string;
    external?: boolean;
    hasMotion?: boolean;
    className?: string;
    motionProps?: MotionProps;
}

export default function Link({ children, href, external = false, hasMotion = false, className = '', motionProps = {} }: LinkProps) {
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    if (hasMotion) {
        return (
            <motion.a href={href} {...externalProps} className={className} {...motionProps}>
                {children}
            </motion.a>
        );
    }

    return (
        <a href={href} {...externalProps} className={className}>
            {children}
        </a>
    );
}
