type CardProps = {
    title: string;
    data: number;
};

export default function Card({ title, data }: CardProps) {
    return (
        <div className='bg-github-stats-bg/30 flex flex-col items-center justify-center rounded-lg p-4'>
            <h4>{title}</h4>
            <p>{data}</p>
        </div>
    );
}
