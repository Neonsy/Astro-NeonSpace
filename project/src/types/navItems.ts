import type { IconType } from 'react-icons';

export type NavItem = {
    href: string;
    icon?: IconType;
    label: string;
};

export type SocialNavItem = Omit<NavItem, 'icon'> & {
    icon: IconType;
};
