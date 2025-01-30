import ProgressBar from '@/components/Common/ProgressBar';
import SectionTitle from '@/components/Common/SectionTitle';

export default function Proficiency() {
    const proficiencies = [
        { skill: 'HTML', percentage: 100 },
        { skill: 'CSS', percentage: 95 },
        { skill: 'Tailwind', percentage: 85 },
        { skill: 'JavaScript', percentage: 80 },
        { skill: 'TypeScript', percentage: 55 },
        { skill: 'React', percentage: 75 },
        { skill: 'NextJS', percentage: 70 },
        { skill: 'Docker', percentage: 65 },
        { skill: 'PHP', percentage: 85 },
        { skill: 'SQL', percentage: 75 },
        { skill: 'Git', percentage: 90 },
        { skill: 'C#', percentage: 50 },
    ];

    return (
        <section className='mx-auto flex flex-col gap-y-9 py-36 lg:max-w-7xl'>
            <SectionTitle title='Proficiency' />
            <div className='grid grid-cols-1 flex-col gap-3 px-3 lg:grid-cols-2'>
                {proficiencies.map(({ skill, percentage }) => (
                    <ProgressBar key={skill} skill={skill} percentage={percentage} />
                ))}
            </div>
        </section>
    );
}
