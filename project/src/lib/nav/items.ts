import { AiFillInstagram } from 'react-icons/ai';
import { FaDiscord, FaGithub } from 'react-icons/fa';

import type { NavItem } from '@/types/navItems';

export const NAV_ITEMS: ReadonlyArray<NavItem> = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
];

export const SOCIAL_NAV: ReadonlyArray<NavItem> = [
    { href: 'https://github.com/neonsy', icon: FaGithub, label: 'Github' },
    { href: 'https://discord.com/users/your-id', icon: FaDiscord, label: 'Discord' },
    { href: 'https://instagram.com/your-profile', icon: AiFillInstagram, label: 'Instagram' },
];
