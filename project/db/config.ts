import { defineDb, defineTable, column, NOW } from 'astro:db';

const Posts = defineTable({
    columns: {
        id: column.number({ primaryKey: true, unique: true, optional: false, index: true }),
        title: column.text({ optional: false }),
        slug: column.text({ unique: true, optional: false }),
        description: column.text({ optional: false }),
        content: column.text({ optional: false }),
        createdAt: column.number({ optional: false, default: NOW }),
        updatedAt: column.number({ optional: false, default: NOW }),
    },
    indexes: [
        { on: ['id'], unique: true },
        { on: ['slug'], unique: true },
    ],
});

const Tags = defineTable({
    columns: {
        id: column.number({ primaryKey: true, unique: true, optional: false, index: true }),
        name: column.text({ optional: false, unique: true }),
    },
    indexes: [
        { on: ['id'], unique: true },
        { on: ['name'], unique: true },
    ],
});

const Projects = defineTable({
    columns: {
        id: column.number({ primaryKey: true, unique: true, optional: false, index: true }),
        title: column.text({ optional: false }),
        slug: column.text({ unique: true, optional: false }),
        description: column.text({ optional: false }),
        createdAt: column.number({ optional: false, default: NOW }),
        updatedAt: column.number({ optional: false, default: NOW }),
        link: column.text({ optional: true }),
    },
    indexes: [
        { on: ['id'], unique: true },
        { on: ['slug'], unique: true },
    ],
});

const PostsTags = defineTable({
    columns: {
        postId: column.number({ optional: false, references: () => Posts.columns.id, index: true }),
        tagId: column.number({ optional: false, references: () => Tags.columns.id, index: true }),
    },
    indexes: [{ on: ['postId', 'tagId'], unique: true }],
});

const ProjectsTags = defineTable({
    columns: {
        projectId: column.number({ optional: false, references: () => Projects.columns.id, index: true }),
        tagId: column.number({ optional: false, references: () => Tags.columns.id, index: true }),
    },
    indexes: [{ on: ['projectId', 'tagId'], unique: true }],
});

// https://astro.build/db/config
export default defineDb({
    tables: { Posts, Tags, Projects, PostsTags, ProjectsTags },
});
