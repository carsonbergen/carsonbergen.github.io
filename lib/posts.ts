import { compileMDX } from 'next-mdx-remote/rsc'; // Supports react server components

type FileTree = {
    "tree" : [
        {
            "path": string,
        }
    ]
}

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
    const res = await fetch(
        `https://raw.githubusercontent.com/carsonbergen/BlogPosts/main/${fileName}`,
        {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, 
                'X-GitHub-Api-Version': '2022-11-28',
            }
        }
    )

    if (!res.ok) return undefined;

    console.log("Recevied ok");

    const rawMDX = await res.text();

    // Even if it can't get exit, GitHub sends a 200 status code so this needs to exist
    if (rawMDX === '404: Not Found') return undefined;

    console.log("No 404 not found error");

    // Get the frontmatter and the content from the raw data
    const { frontmatter, content } = await compileMDX<{
        title: string, date: string, description: string, tags: string[] 
    }>({
        source: rawMDX,
        options: {
            parseFrontmatter: true,
        }
    });

    const id = fileName.replace(/\.mdx$/, '');
    const blogPostObj: BlogPost = {
        meta: {
            id,
            title: frontmatter.title,
            date: frontmatter.date,
            description: frontmatter.description,
            tags: frontmatter.tags
        },
        content
    };
    console.log("id: " + id);
    return blogPostObj;
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
    // Fetch blog posts
    const res = await fetch(
        'https://api.github.com/repos/carsonbergen/BlogPosts/git/trees/main?recursive=1',
        {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, 
                'X-GitHub-Api-Version': '2022-11-28',
            }
        }
    )

    // If we failed to get anything valid, return undefined
    if (!res.ok) return undefined;

    // Put data in type
    const repoFileTree: FileTree = await res.json();

    // Array of files that end in .mdx
    const filesArray = repoFileTree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'));

    // Init empty array to hold metadata
    const posts: Meta[] = [];

    // For of, as for each loops cannot await
    for (const file of filesArray) {
        const post = await getPostByName(file);
        if (post) {
            const { meta } = post;
            posts.push(meta);
        }
    }
    // Return sorted array of posts (by date)
    return posts.sort((a, b) => a.date < b.date ? 1 : -1);
}