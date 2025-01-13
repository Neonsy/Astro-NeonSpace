export type GithubStats = {
    commits: {
        total: number;
        lastYear: number;
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
