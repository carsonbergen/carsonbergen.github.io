import Link from "next/link";

function FourOhFour() {
    return (
        <>
            <div className="page-body">
                <div>
                    <h1 className="page-header">
                        <span className="text-purple dark:text-yellow">404!</span> Page not found!
                    </h1>
                    <p className="page-paragraph">
                        Whoa! The page you wanted to access seems to no longer exist. Hopefully this isn't too big a deal!
                        Either way, here is a link back to the <Link className="inline-link" href="/">home page</Link>!
                    </p>
                </div>
            </div> 
        </>
    );
}

export default FourOhFour;