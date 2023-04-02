import { Route, Routes, Link } from 'react-router-dom'

function BlogSidebar() {
    return(
        <>
            <ul className="blogSidebar">
                <li className="blogCategory">
                    <span>Programming</span>
                </li>
                {/* <li>
                    <Link to="/blog/bottled_up_remake">Bottled up remake</Link>
                </li> */}
            </ul>
        </>
    );
}

export default BlogSidebar;