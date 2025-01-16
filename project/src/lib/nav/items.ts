import type { NavItem } from '@/types/navItems';

export const NAV_ITEMS: ReadonlyArray<NavItem> = [
    { href: '/', label: 'Home', delay: 0.1 },
    { href: '/about', label: 'About Me', delay: 0.2 },
    { href: '/blog', label: 'Blog', delay: 0.3 },
    { href: '/projects', label: 'Projects', delay: 0.4 },
    { href: '/contact', label: 'Contact', delay: 0.5 },
];
