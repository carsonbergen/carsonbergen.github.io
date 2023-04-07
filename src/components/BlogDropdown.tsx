import { Route, Routes, Link } from 'react-router-dom'

function BlogSidebar(props : any) {
    return(
        <>
            <div className="dropdown min-w-fit w-auto normal-case scroll-smooth">
                <label tabIndex={0} className="dropdownButton">Posts</label>
                <ul tabIndex={0} className="dropdownMenu">
                    <li>
                        <Link to="/blog/bottledup_remake">Bottled Up Remake</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default BlogSidebar;