import SectionTitle from '@/components/Common/SectionTitle';

interface JourneyCardProps {
    startDate: string;
    endDate: string;
    title: string;
    place: string;
    description: string;
}

export default function Journey() {
    return (
        <section className='flex flex-col gap-y-9 py-36'>
            <SectionTitle title='Journey' />
            <div className='flex flex-col gap-8'>
                <JourneyCard
                    startDate='start date'
                    endDate='end date'
                    title='title'
                    place='place'
                    description='description'
                />
                {/* Add more JourneyCards as needed */}
            </div>
        </section>
    );
}

export function JourneyCard({ startDate, endDate, title, place, description }: JourneyCardProps) {
    return (
        <div className='relative flex gap-8'>
            {/* Timeline line and circle */}
            <div className='relative flex flex-col items-center'>
                <div className='h-4 w-4 rounded-full bg-cyan-400'></div>
                <div className='h-full w-0.5 bg-gradient-to-b from-cyan-400/50 to-transparent'></div>
            </div>

            {/* Content card */}
            <div className='card-padded flex-1'>
                {/* Date range */}
                <p className='text-sm text-cyan-400'>
                    {startDate} - {endDate}
                </p>

                {/* Title and place */}
                <h3 className='mt-2 text-2xl font-bold text-text-primary'>{title}</h3>
                <p className='text-purple-400'>{place}</p>

                {/* Description */}
                <p className='mt-2 text-text-secondary'>{description}</p>
            </div>
        </div>
    );
}
