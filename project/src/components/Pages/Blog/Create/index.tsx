import { db } from '@/db/client';
import { posts, postTags } from '@/db/schema';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import slugify from 'slugify';

interface PostForm {
    title: string;
    description: string;
    content: string;
    tags: string[];
    authorName: string;
}

export default function CreatePost() {
    const { register, handleSubmit, control } = useForm<PostForm>();
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = async (data: PostForm) => {
        setSubmitting(true);
        try {
            const newPost = await db
                .insert(posts)
                .values({
                    title: data.title,
                    description: data.description,
                    content: data.content,
                    authorName: data.authorName,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    slug: slugify(data.title),
                })
                .returning()
                .get();

            await db
                .insert(postTags)
                .values(
                    data.tags.map((tag) => ({
                        postCreatedAt: newPost.createdAt,
                        tagName: tag,
                    }))
                )
                .run();

            window.location.href = `/blog/${newPost.slug}`;
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            {/* Form fields */}
        </form>
    );
}
