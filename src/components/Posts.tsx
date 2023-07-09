import { getPostsMeta } from "../../lib/posts";
import ListItem from "./ListItem";
import Warning from "./Warning";

export default async function Posts() {
    const posts = await getPostsMeta();

    if (!posts) {
        return (
            <Warning type={0} warning="Sorry, no posts could be found at this time."/>
        )
    }
    
    // for (const post of posts) {
    //     console.log(post);
    // }

    return (
        <>
            <section>
                <ul className="w-full list-none p-0">
                    {
                        posts.map((post) => (
                            <ListItem key={ post.id } post={ post }/>
                        ))
                    }
                </ul>
            </section>
        </>
    );
}