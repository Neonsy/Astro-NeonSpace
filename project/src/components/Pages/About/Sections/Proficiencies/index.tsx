import ProgressBar from '@/components/Common/ProgressBar';
import SectionTitle from '@/components/Common/SectionTitle';

export default function Proficiency() {
    const proficiencies = {
        HTML: 100,
        CSS: 95,
        Tailwind: 85,
        JavaScript: 80,
        TypeScript: 55,
        React: 75,
        NextJS: 70,
        NodeJS: 65,
        Express: 60,
        MongoDB: 50,
        Docker: 65,
        PHP: 85,
        SQL: 75,
        Git: 90,
        'C#': 50,
    };

    return (
        <section className='mx-auto flex flex-col gap-y-9 py-36 lg:max-w-7xl'>
            <SectionTitle title='Proficiency' />
            <div className='grid grid-cols-1 flex-col gap-3 px-3 lg:grid-cols-2'>
                {Object.entries(proficiencies).map(([skill, percentage]) => (
                    <ProgressBar key={skill} skill={skill} percentage={percentage} />
                ))}
            </div>
        </section>
    );
}
