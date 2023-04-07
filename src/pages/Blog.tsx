import { Routes, Route } from 'react-router-dom';

import './../App.css';

import Warning from "../components/Warning";
import BlogDropdown from '../components/BlogDropdown';
import { HelloWorldPost, BottledUpRemake } from './blog_posts/Posts';

function Blog() {
  return(
    <>
      <div className="flex flex-row pt-4 pb-4 px-4 justify-center space-x-4">
        <BlogDropdown />
        <div className="pageView">
          <div className="hero-content">
            <div className="">
              <Routes>
                <Route path='/' element={<HelloWorldPost />} />
                <Route path='/bottledup_remake' element={<BottledUpRemake />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;