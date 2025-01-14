import { useGithubStats } from '@/hooks/useGithubStats';
import { RiGitRepositoryFill } from 'react-icons/ri';
import Card from '@/components/Home/Sections/Stats/Card';

type GithubStatsProps = {
    username: string;
    authToken: ImportMetaEnv['GITHUB_FETCH_TOKEN'];
};

export default function Stats({ username, authToken }: GithubStatsProps) {
    const { data: stats, isLoading, isError } = useGithubStats(username, authToken);

    if (isLoading) return <></>;
    if (isError) return <></>;

    return (
        <section>
            <Card icon={RiGitRepositoryFill}  data={stats!.repositories} />
            <Card icon={RiGitRepositoryFill}  data={stats!.commits} />
            <Card icon={RiGitRepositoryFill}  data={stats!.social} />
            <Card icon={RiGitRepositoryFill}  data={stats!.pullRequests} />
            <Card icon={RiGitRepositoryFill}  data={stats!.issues} />
        </section>
    );
}
