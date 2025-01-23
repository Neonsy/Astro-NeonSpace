import { sql } from 'drizzle-orm';
import { sqliteTable, text, primaryKey, foreignKey, index, check } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

// Author Table
export const author = sqliteTable(
    'author',
    {
        name: text('name').notNull(),
        icon: text('icon').notNull(),
    },
    (table) => [primaryKey({ columns: [table.name] }), index('author_name_idx').on(table.name)]
);

// Posts Table
export const posts = sqliteTable(
    'posts',
    {
        title: text('title').notNull(),
        description: text('description').notNull(),
        content: text('content').notNull(),
        slug: text('slug').notNull().unique(),
        searchVector: text('search_vector'), // For full-text search
        createdAt: text('created_at')
            .notNull()
            .$defaultFn(() => new Date().toISOString()),
        updatedAt: text('updated_at')
            .notNull()
            .$defaultFn(() => new Date().toISOString()),
        authorName: text('author_name'),
    },
    (table) => [
        primaryKey({ columns: [table.createdAt] }),
        foreignKey({
            columns: [table.authorName],
            foreignColumns: [author.name],
            name: 'post_author_fk',
        }),
        check('title_length', sql`LENGTH(${table.title}) BETWEEN 9 AND 90`),
        check('content_length', sql`LENGTH(${table.content}) BETWEEN 90 AND 18000`),
        index('post_author_idx').on(table.authorName),
        index('post_created_idx').on(table.createdAt),
    ]
);

// Create FTS5 virtual table for search
export const postsFTS = sqliteTable('posts_fts', {
  title: text('title'),
  description: text('description'),
  content: text('content'),
}, (table) => [{
  fts: sql`USING fts5(title, description, content)`
}]);

export const allowedTags = ['javascript', 'typescript', 'webdev', 'tutorial', 'ai'] as const;

// Generate SQL-safe string from enum
const tagValues = allowedTags.map((t) => `'${t}'`).join(', ');

// Tags Table
export const tags = sqliteTable(
    'tags',
    {
        name: text('name', { enum: allowedTags }).primaryKey(),
    },
    (table) => [
        primaryKey({ columns: [table.name] }),
        check('valid_tags', sql`${table.name} IN (${sql.raw(tagValues)})`),
        index('tag_name_idx').on(table.name),
    ]
);

// Junction Table
export const postTags = sqliteTable(
    'post_tags',
    {
        postCreatedAt: text('post_created_at').notNull(),
        tagName: text('tag_name').notNull(),
    },
    (table) => [
        primaryKey({ columns: [table.postCreatedAt, table.tagName] }),
        foreignKey({
            columns: [table.postCreatedAt],
            foreignColumns: [posts.createdAt],
            name: 'post_tag_post_fk',
        }),
        foreignKey({
            columns: [table.tagName],
            foreignColumns: [tags.name],
            name: 'post_tag_tag_fk',
        }),
        index('post_tag_post_idx').on(table.postCreatedAt),
        index('post_tag_tag_idx').on(table.tagName),
    ]
);

// Relations
export const authorRelations = relations(author, ({ many }) => ({
    posts: many(posts),
}));

export const postRelations = relations(posts, ({ one, many }) => ({
    author: one(author, {
        fields: [posts.authorName],
        references: [author.name],
    }),
    tags: many(postTags),
}));

export const tagRelations = relations(tags, ({ many }) => ({
    posts: many(postTags),
}));

export const postTagRelations = relations(postTags, ({ one }) => ({
    post: one(posts, {
        fields: [postTags.postCreatedAt],
        references: [posts.createdAt],
    }),
    tag: one(tags, {
        fields: [postTags.tagName],
        references: [tags.name],
    }),
}));
