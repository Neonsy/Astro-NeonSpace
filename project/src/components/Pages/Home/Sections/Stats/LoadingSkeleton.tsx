export default function LoadingSkeleton() {
    return (
        <section id='stats' className='flex items-center justify-center py-36' aria-busy>
            <div className='flex flex-col gap-y-12 ~px-4/8 lg:max-w-7xl'>
                <h2 className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-center text-3xl font-bold text-transparent'>
                    Developer Profile
                </h2>

                {/* Profile Card Skeleton */}
                <div className='flex-grow rounded-xl border border-white/10 bg-white/[0.03] p-6 lg:backdrop-blur-sm'>
                    <div className='flex flex-col items-center justify-center sm:gap-6 md:flex-row'>
                        <div className='h-32 w-32 shrink-0 animate-pulse rounded-full bg-white/10 ring-2 ring-purple-500/20' />
                        <div className='mt-4 flex w-full flex-1 flex-col items-center sm:items-start'>
                            <div className='flex w-full flex-col items-center gap-4 sm:flex-row'>
                                <div className='flex items-center gap-2'>
                                    <div className='h-6 w-6 animate-pulse rounded bg-white/10' />
                                    <div className='h-6 w-24 animate-pulse rounded bg-white/10' />
                                </div>
                                <div className='flex items-center gap-4'>
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className='flex items-center gap-1'>
                                            <div className='h-4 w-6 animate-pulse rounded bg-white/10' />
                                            <div className='h-4 w-2 animate-pulse rounded bg-white/10' />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='mt-2 h-4 w-64 animate-pulse rounded bg-white/10' />
                            <div className='mt-2 h-16 animate-pulse rounded bg-white/10 text-transparent' aria-hidden>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga, quibusdam atque assumenda excepturi,
                                blanditiis illo incidunt itaque perspiciatis similique esse officiis ut voluptates, amet dicta debitis! Libero, amet
                                eos.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Languages Skeleton */}
                <div className='flex flex-col gap-y-4'>
                    <h3 className='text-xl font-semibold text-text-primary'>Languages</h3>
                    <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className='flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-4 lg:backdrop-blur-sm'>
                                <div className='h-5 w-16 animate-pulse rounded bg-white/10' />
                                <div className='h-2.5 w-72 animate-pulse rounded-full bg-white/10' />
                                <div className='h-5 w-4 animate-pulse rounded bg-white/10' />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Repositories Skeleton */}
                <div className='space-y-12'>
                    {['Popular Repositories', 'Active Repositories'].map((title, sectionIndex) => (
                        <div key={sectionIndex} className='flex flex-col gap-y-4'>
                            <h3 className='text-xl font-semibold text-text-primary'>{title}</h3>
                            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className='flex min-h-[200px] flex-col gap-y-6 rounded-xl border border-white/10 bg-white/[0.03] p-6 lg:backdrop-blur-sm'>
                                        <div className='flex items-center gap-2'>
                                            <div className='h-4 w-4 shrink-0 animate-pulse rounded bg-white/10' />
                                            <div className='h-5 w-64 animate-pulse rounded bg-white/10' />
                                        </div>
                                        <div className='h-16 w-full animate-pulse rounded bg-white/10' />
                                        <div className='mt-auto flex items-center gap-4'>
                                            {[...Array(5)].map((_, j) => (
                                                <div key={j} className='flex items-center gap-1'>
                                                    <div className='h-4 w-4 shrink-0 animate-pulse rounded bg-white/10' />
                                                    <div className='h-4 w-2 animate-pulse rounded bg-white/10' />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
