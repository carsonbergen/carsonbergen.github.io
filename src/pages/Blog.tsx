import { Routes, Route } from 'react-router-dom';

import './../App.css';

import Warning from "../components/Warning";
import BlogSidebar from '../components/BlogSidebar';
import HelloWorldPost from './blog_posts/HelloWorldPost';

function Blog() {
  return(
    <>
      
      <div className="flex flex-row gap-x-4 pt-4 pb-4 pr-4 pl-4">
        <BlogSidebar />
        <div className='pageView'>
          <div className="hero min-h-screen bg-base-300 rounded-box">
            <div className="hero-content">
              <div className="">
                <Routes>
                  <Route path='/' element={<HelloWorldPost />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;