type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Container({ children, className = '' }: ContainerProps) {
    return <div className={`${className} md:container md:mx-auto`}>{children}</div>;
}
