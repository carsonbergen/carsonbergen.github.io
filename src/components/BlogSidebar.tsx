import { Route, Routes, Link } from 'react-router-dom'

function BlogSidebar() {
    return(
        <>
            <Routes>
                <Route path='/blog/hello_world' />
            </Routes>
            <ul className="menu bg-base-100 w-56 px-4 pb-4 pt-4 rounded-box align-top justify-start">
                <li className="blogCategory">
                    <span>Programming</span>
                </li>
                <li>
                    <Link to="/blog/hello_world">Home</Link>
                </li>
                <li><a>Item 2</a></li>
                <li className="menu-title">
                    <span>Category</span>
                </li>
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </>
    );
}

export default BlogSidebar;