type LinkProps = {
    children: React.ReactNode;
    href: string;
    external?: boolean;
    className?: string;
};

export default function Link({ children, href, external = false, className = '' }: LinkProps) {
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <a href={href} {...externalProps} className={className}>
            {children}
        </a>
    );
}
