export type NavItem = {
    href: string;
    label: string;
    delay: number;
};

export type BaseNavProps = {
    currentPath: string;
    navItems: ReadonlyArray<NavItem>;
};

export type NavItemProps = NavItem & {
    currentPath: string;
};
