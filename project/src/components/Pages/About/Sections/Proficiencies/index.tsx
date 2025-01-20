import SectionTitle from '@/components/Common/SectionTitle';
import ProgressBar from '@/components/Common/ProgressBar';

export default function Proficiency() {
    return (
        <section className='flex flex-col gap-y-9 py-36'>
            <SectionTitle title='Proficiency' />
            <div className='grid grid-cols-1 flex-col gap-3 px-3 lg:grid-cols-2'>
                <ProgressBar skill='HTML' percentage={100} />
                <ProgressBar skill='CSS' percentage={95} />
                <ProgressBar skill='Tailwind' percentage={85} />
                <ProgressBar skill='JavaScript' percentage={80} />
                <ProgressBar skill='TypeScript' percentage={55} />
                <ProgressBar skill='React' percentage={75} />
                <ProgressBar skill='NextJS' percentage={70} />
                <ProgressBar skill='Docker' percentage={65} />
                <ProgressBar skill='PHP' percentage={85} />
                <ProgressBar skill='SQL' percentage={75} />
                <ProgressBar skill='Git' percentage={90} />
                <ProgressBar skill='C#' percentage={50} />
            </div>
        </section>
    );
}
