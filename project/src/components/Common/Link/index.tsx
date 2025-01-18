import type { MotionProps } from 'motion/react';
import { motion } from 'motion/react';

interface LinkProps extends React.ComponentProps<'a'> {
    external?: boolean;
    hasMotion?: boolean;
    motionProps?: MotionProps;
}

export default function Link({ children, href, external = false, hasMotion = false, className = '', motionProps = {}, ...rest }: LinkProps) {
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    if (hasMotion) {
        return (
            <motion.a href={href} className={className} {...externalProps} {...motionProps} {...(rest as any)}>
                {children}
            </motion.a>
        );
    }

    return (
        <a href={href} className={className} {...externalProps} {...rest}>
            {children}
        </a>
    );
}
