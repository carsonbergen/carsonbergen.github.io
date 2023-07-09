import Posts from "@/components/Posts";

export default function BlogHome() {
    return (
        <>
            <div className="page-body">
                <h1 className="page-header">
                    Articles:
                </h1>
                <Posts />
            </div>
        </>
    );
}