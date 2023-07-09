import Link from "next/link";
import getFormattedDate from "../../lib/format";

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date, description } = post;
    const formattedDate = getFormattedDate(date);
    return(
        <>
            <Link className="page-list-item" href={`/blog/${id}`} >
                <h1 className="page-link-blog-post">
                    { title }
                </h1>
                <p className="page-blog-description">
                    { description }
                </p>
                <p className="page-blog-date">
                    { formattedDate }
                </p>
            </Link>
        </>

    )
}