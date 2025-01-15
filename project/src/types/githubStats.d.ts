export interface GithubStats {
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
    popularRepos: Array<{
        name: string;
        url: string;
        description: string;
        stars: number;
        forks: number;
        watchers: number;
        totalPRs: number;
        totalIssues: number;
    }>;
    activeRepos: Array<{
        name: string;
        url: string;
        description: string;
        stars: number;
        forks: number;
        watchers: number;
        totalPRs: number;
        totalIssues: number;
    }>;
    languages: Record<string, number>;
}
