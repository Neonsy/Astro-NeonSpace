import type { MotionProps } from 'motion/react';
import { motion } from 'motion/react';
import type { IconType } from 'react-icons';

type LinkProps = React.ComponentProps<'a'> & {
    external?: boolean;
    hasMotion?: boolean;
    motionProps?: MotionProps;
    iconOnly?: boolean;
    icon?: IconType;
};

export default function Link({
    children,
    href,
    external = false,
    hasMotion = false,
    className = '',
    motionProps = {},
    iconOnly = false,
    icon: Icon,
    ...rest
}: LinkProps) {
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    if (iconOnly) {
        return (
            <a href={href} className={className} {...externalProps} {...rest}>
                {Icon && <Icon />}
            </a>
        );
    }

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
