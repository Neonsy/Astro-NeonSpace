import { defineDb, defineTable, column, NOW } from 'astro:db';

const Posts = defineTable({
    columns: {
        id: column.number({ primaryKey: true, unique: true, optional: false }),
        title: column.text({ optional: false }),
        slug: column.text({ unique: true, optional: false, index: true }),
        description: column.text({ optional: false }),
        content: column.text({ optional: false }),
        createdAt: column.number({ optional: false, default: NOW }),
        updatedAt: column.number({ optional: false, default: NOW }),
    },
    indexes: [{ on: ['createdAt', 'id'] }],
});

const Tags = defineTable({
    columns: {
        id: column.number({ primaryKey: true, unique: true, optional: false, index: true }),
        name: column.text({ optional: false, unique: true, index: true }),
    },
});

const Projects = defineTable({
    columns: {
        id: column.number({ primaryKey: true, unique: true, optional: false }),
        title: column.text({ optional: false }),
        slug: column.text({ unique: true, optional: false, index: true }),
        description: column.text({ optional: false }),
        createdAt: column.number({ optional: false, default: NOW }),
        updatedAt: column.number({ optional: false, default: NOW }),
        link: column.text({ optional: true }),
    },
    indexes: [{ on: ['createdAt', 'id'] }],
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
