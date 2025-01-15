type LoadingSkeletonProps = {
    repoSection: string[];
};

export default function LoadingSkeleton({ repoSection }: LoadingSkeletonProps) {
    return (
        <section id='explore' className='py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <h2 className='mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-center text-3xl font-bold text-transparent'>
                    Developer Profile
                </h2>

                {/* Profile Card Skeleton */}
                <div className='mb-8 rounded-xl border border-white/10 bg-white/[0.03] p-6'>
                    <div className='flex flex-col items-center sm:flex-row sm:items-start sm:gap-6'>
                        <div className='h-32 w-32 animate-pulse rounded-full bg-white/10' />
                        <div className='mt-4 flex-1'>
                            <div className='h-6 w-48 animate-pulse rounded bg-white/10' />
                            <div className='mt-2 h-4 w-32 animate-pulse rounded bg-white/10' />
                            <div className='mt-2 h-16 w-full animate-pulse rounded bg-white/10' />
                        </div>
                    </div>
                </div>

                {/* Languages Skeleton */}
                <div className='mb-12'>
                    <h3 className='mb-6 text-xl font-semibold text-gray-200'>Languages</h3>

                    <div className='grid gap-3 sm:grid-cols-2'>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className='h-14 animate-pulse rounded-lg bg-white/10' />
                        ))}
                    </div>
                </div>

                {/* Repositories Skeleton */}
                {repoSection.map((title, sectionIndex) => (
                    <div key={sectionIndex} className='mb-12'>
                        <h3 className='mb-6 text-xl font-semibold text-gray-200'>{title}</h3>
                        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className='h-32 animate-pulse rounded-xl bg-white/10' />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
