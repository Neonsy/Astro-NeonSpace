interface ImportMetaEnv {
    readonly GITHUB_TOKEN: string;

    readonly CLERK_SECRET_KEY: string;

    readonly TURSO_DATABASE_URL: string;
    readonly TURSO_AUTH_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
