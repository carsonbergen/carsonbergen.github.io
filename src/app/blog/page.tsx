import Posts from "@/components/Posts";
import Warning from "@/components/Warning";

export default async function BlogHome() {
    const debug = true;
    if (debug) {
        return (
            <>
                <div className='page-body'>
                    <Warning
                        warning="This page is under construction!"
                        type={1}
                    />
                </div>
            </>
        )
    }
    return (
        <>
            <div className="page-body">
                <h1 className="page-header">
                    Articles:
                </h1>
                {/* <Posts /> */}
            </div>
        </>
    );
}