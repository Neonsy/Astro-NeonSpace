export type GitHubRepo = {
    name: string;
    fork: boolean;
    stargazers_count: number;
    pushed_at: string;
    description: string;
    html_url: string;
    language: string;
};

export type LanguageStats = {
    [key: string]: number;
};

export type RepoStats = {
    commits: number;
    pulls: number;
    issues: number;
};
