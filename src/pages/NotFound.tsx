import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <div className='page-body'>
                <p className="page-paragraph">
                    Whoa! The page you wanted to access, seems to no longer exist. Hopefully this isn't too big a deal!
                    Either way, here is a link back to the <Link className="inline-link" to="/">home page</Link>!
                </p>
            </div>
        </>
    );
}

export default NotFound;