import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './src/db/schema.ts',
    out: './migrations',
    dialect: 'turso',
    dbCredentials: {
        url: import.meta.env.TURSO_DATABASE_URL,
        authToken: import.meta.env.TURSO_AUTH_TOKEN,
    },
});
