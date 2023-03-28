
import './../App.css';

import Warning from "../components/Warning";
import BlogSidebar from '../components/BlogSidebar';

const test = `
**Below me will be displayed as a block:**
$$
Block Math
$$
**Next to me will be displayed as inline ->** $Inline Math$
`

function Blog() {
  return(
    <>
      <div className="flex flex-row gap-x-4 pt-4 pb-4">
        <BlogSidebar />
        <div className='pageView'>
          <div className="hero min-h-screen bg-base-300 rounded-box">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Hello, world!</h1>
                <p className="py-6">Click on a blog post, on the left hand side, to get started!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;