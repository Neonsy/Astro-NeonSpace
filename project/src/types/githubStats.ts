export type Repository = {
    name: string;
    url: string;
    description: string;
    stars: number;
    forks: number;
    watchers: number;
    totalPRs: number;
    totalIssues: number;
};

export type GithubStats = {
    userInfo: {
        username: string;
        joinedAt: string;
        description: string | null;
        avatarUrl: string;
    };
    repositories: number;
    social: {
        stars: number;
        followers: number;
    };
    popularRepos: Repository[];
    activeRepos: Repository[];
    languages: Record<string, number>;
};

export type GithubStatsProps = {
    username: string;
    authToken: string;
};
