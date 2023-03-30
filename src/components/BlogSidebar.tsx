import { Route, Routes, Link } from 'react-router-dom'

function BlogSidebar() {
    return(
        <>
            <ul className="menu bg-base-100 w-56 px-4 pb-4 pt-4 rounded-box align-top justify-start">
                <li className="blogCategory">
                    <span>Programming</span>
                </li>
                <li>
                    <Link to="/blog/bottled_up_remake">Bottled up remake</Link>
                </li>
            </ul>
        </>
    );
}

export default BlogSidebar;