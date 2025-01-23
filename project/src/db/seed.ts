import 'dotenv/config'; // Add this at the top
import { drizzle } from 'drizzle-orm/libsql';
import { seed } from 'drizzle-seed';
import { createClient } from '@libsql/client';
import { tags, allowedTags } from './schema';

// Verify env vars exist
if (!process.env.TURSO_DATABASE_URL || !process.env.TURSO_AUTH_TOKEN) {
    throw new Error('Missing Turso credentials in environment variables');
}

const client = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
});

const db = drizzle(client);

await seed(db, { tags }).refine((f) => ({
  tags: {
    columns: {
      name: f.valuesFromArray({
        values: allowedTags.slice(),
        isUnique: true
      })
    },
    // Add these critical configurations
    count: allowedTags.length, // Match array length
    conflictStrategy: {
      type: 'ignore',
      column: 'name'
    }
  }
}));
