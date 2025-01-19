type SectionTitleProps = {
    title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
    return <h2 className='gradient-text-purple text-center text-3xl font-bold'>{title}</h2>;
}
