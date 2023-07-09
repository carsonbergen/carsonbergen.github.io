import Link from "next/link";
import getFormattedDate from "../../lib/format";

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date, description } = post;
    const formattedDate = getFormattedDate(date);
    return(
        <li>
            <Link className="underline" href={`/blog/${id}`}>
                { title }
            </Link>
            <br />
            <p className="text-sm mt-1">{ formattedDate }</p>
        </li>
    )
}