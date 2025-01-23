// src/db/seed.ts
import { db } from './client';
import { tags, allowedTags } from './schema';

async function seed() {
    try {
        const result = await db
            .insert(tags)
            .values(allowedTags.map((name) => ({ name })))
            .onConflictDoNothing()
            .returning();

        console.log(`Seeded tags: ${result.map((t) => t.name).join(', ')}`);
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    } finally {
        process.exit(0);
    }
}

seed();
