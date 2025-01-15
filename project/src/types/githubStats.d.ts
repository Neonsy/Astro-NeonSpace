export type GithubStats = {
    userInfo: {
        username: string;
        joinedAt: string;
        description: string | null;
        avatarUrl: string;
    };
    repositories: {
        public: number;
        private: number;
        total: number;
    };
    social: {
        stars: number;
        followers: number;
    };
    pullRequests: {
        total: number;
        merged: number;
        open: number;
        closed: number;
    };
    issues: {
        total: number;
        open: number;
        closed: number;
    };
    popularRepos: Array<{
        name: string;
        url: string;
        description: string | null;
        primaryLanguage: string | null;
        stars: number;
        forks: number;
        watchers: number;
        totalPRs: number;
        totalIssues: number;
        urls: {
            stars: string;
            forks: string;
            watchers: string;
            pulls: string;
            issues: string;
        };
    }>;
    activeRepos: Array<{
        name: string;
        url: string;
        description: string | null;
        primaryLanguage: string | null;
        stars: number;
        forks: number;
        watchers: number;
        totalPRs: number;
        totalIssues: number;
        urls: {
            stars: string;
            forks: string;
            watchers: string;
            pulls: string;
            issues: string;
        };
    }>;
    languages: {
        [key: string]: number;
    };
};
