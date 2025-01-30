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
    { href: 'https://discord.gg/aK3B9QyGU4', icon: FaDiscord, label: 'Discord' },
    { href: 'https://www.instagram.com/neonsy01/', icon: AiFillInstagram, label: 'Instagram' },
];
