import Posts from '@/components/Posts';
import getFormattedDate from '../../../../lib/format';
import { notFound } from 'next/navigation';
import { getPostsMeta, getPostByName } from '../../../../lib/posts';
import Link from 'next/link';
import Warning from '@/components/Warning';

export const revalidate = 60;

type Props = {
    params: {
        postId: string
    }
}

// Comment code when revalidate is zero
export async function generateStaticParams() {
    const posts = await getPostsMeta(); // deduped
    if (!posts) return [];
    return posts.map((post) => ({
        postId: post.id
    }));
}

export async function generateMetadata({ params: { postId }}: Props) {
    const post = await getPostByName(`${postId}.mdx`); // deduped
    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }
    return {
        title: post.meta.title
    }
}

export default async function Post({ params: { postId }}: Props) {
    const post = await getPostByName(`${postId}.mdx`); // deduped

    if (!post) notFound();

    const { meta, content } = post;

    const publicationDate = getFormattedDate(meta.date);

    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>
            { tag }
        </Link>
    ));

    return (
        <>
            <div className='page-body'>
                <h1 className='blog-title'>
                    { meta.title }
                </h1>
                <p className='blog-date'>
                    { publicationDate }
                </p>
                <article className='blog-prose'>
                    { content }
                </article>
                <section>
                    <h3>
                        Related:
                    </h3>
                    <div className='flex flex-row gap-4'>
                        { tags }
                    </div>
                </section>
                <p>
                    <Link href="/">Back to home</Link>
                </p>
            </div>
        </>
    );
}
