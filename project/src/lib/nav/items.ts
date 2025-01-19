import { AiFillInstagram } from 'react-icons/ai';
import { FaDiscord, FaGithub } from 'react-icons/fa';

import type { NavItem } from '@/types/navItems';

export const NAV_ITEMS: ReadonlyArray<NavItem> = [
    { href: '/', label: 'Home', delay: 0.05 },
    { href: '/about', label: 'About', delay: 0.12 },
    { href: '/blog', label: 'Blog', delay: 0.18 },
    { href: '/projects', label: 'Projects', delay: 0.21 },
    { href: '/contact', label: 'Contact', delay: 0.27 },
];

export const SOCIAL_NAV: ReadonlyArray<NavItem> = [
    { href: 'https://github.com/neonsy', icon: FaGithub, label: 'Github', delay: 0.1 },
    { href: 'https://discord.com/users/your-id', icon: FaDiscord, label: 'Discord', delay: 0.2 },
    { href: 'https://instagram.com/your-profile', icon: AiFillInstagram, label: 'Instagram', delay: 0.3 },
];
