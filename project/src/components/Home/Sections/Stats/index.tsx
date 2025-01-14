import { useGithubStats } from '@/hooks/useGithubStats';
import { FaCodeCommit, FaCodePullRequest } from 'react-icons/fa6';
import { RiGitRepositoryFill } from 'react-icons/ri';
import { TiSocialGithub } from 'react-icons/ti';
import { VscIssues } from 'react-icons/vsc';

type GithubStatsProps = {
    username: string;
    authToken: ImportMetaEnv['GITHUB_FETCH_TOKEN'];
};

export default function Stats({ username, authToken }: GithubStatsProps) {
    const { data: stats, isLoading, isError } = useGithubStats(username, authToken);

    if (isLoading) return <div className='flex h-96 items-center justify-center'>Loading...</div>;
    if (isError) return <div className='flex h-96 items-center justify-center'>Failed to load stats</div>;

    return (
        <section className='relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8'>
            <h2 className='mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-center text-3xl font-bold text-transparent'>
                GitHub Activity Overview
            </h2>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                <div className='relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]'>
                    <div className='mb-4 inline-block rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3'>
                        <FaCodeCommit className='h-6 w-6 text-blue-400' />
                    </div>
                    <div>
                        <h3 className='mb-1 text-sm font-medium text-gray-400'>Commits</h3>
                        <p className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent'>
                            {stats!.commits.total}
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>{stats!.commits.lastYear} in the last year</p>
                    </div>
                </div>

                {/* Repositories Card */}
                <div className='relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]'>
                    <div className='mb-4 inline-block rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3'>
                        <RiGitRepositoryFill className='h-6 w-6 text-blue-400' />
                    </div>
                    <div>
                        <h3 className='mb-1 text-sm font-medium text-gray-400'>Repositories</h3>
                        <p className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent'>
                            {stats!.repositories.total}
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                            {stats!.repositories.public} public / {stats!.repositories.private} private
                        </p>
                    </div>
                </div>

                {/* Social Card */}
                <div className='relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]'>
                    <div className='mb-4 inline-block rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3'>
                        <TiSocialGithub className='h-6 w-6 text-blue-400' />
                    </div>
                    <div>
                        <h3 className='mb-1 text-sm font-medium text-gray-400'>Social</h3>
                        <p className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent'>
                            {stats!.social.followers}
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>{stats!.social.stars} total stars</p>
                    </div>
                </div>

                {/* Pull Requests Card */}
                <div className='relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]'>
                    <div className='mb-4 inline-block rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3'>
                        <FaCodePullRequest className='h-6 w-6 text-blue-400' />
                    </div>
                    <div>
                        <h3 className='mb-1 text-sm font-medium text-gray-400'>Pull Requests</h3>
                        <p className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent'>
                            {stats!.pullRequests.merged}
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                            {stats!.pullRequests.open} open / {stats!.pullRequests.closed} closed
                        </p>
                    </div>
                </div>

                {/* Issues Card */}
                <div className='relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]'>
                    <div className='mb-4 inline-block rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3'>
                        <VscIssues className='h-6 w-6 text-blue-400' />
                    </div>
                    <div>
                        <h3 className='mb-1 text-sm font-medium text-gray-400'>Issues</h3>
                        <p className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent'>
                            {stats!.issues.total}
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                            {stats!.issues.open} open / {stats!.issues.closed} closed
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
