import { Link, Route, Routes } from 'react-router-dom';

import './css/Main.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import GameDevCorner from './pages/GameDevCorner';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
    console.log(location.pathname);
    return (
        <div className='page flex'>
            <div>
                <Navbar />
                <Routes>
                    {/* 404  page */}
                    <Route path='*' element={<NotFound />} />
                    {/* Home */}
                    <Route path='/' element={<Home />} />
                    {/* Blog */}
                    <Route path='/blog/' element={<Blog />} />
                    {/* Projects page */}
                    <Route path='/projects' element={<Projects />} />
                    {/* Game dev corner */}
                    <Route path='/game_dev_corner' element={<GameDevCorner />} />

                </Routes>
                <Footer className="page-footer">
                    <Link className='page-basic-button' to="/">
                        Carson Bergen
                    </Link>
                    <Link className='page-basic-button' to="https://github.com/carsonbergen" target='_blank' rel='noopener noreferrer'>
                        GitHub
                    </Link>
                    <Link className='page-basic-button' to="https://carsonbergen.itch.io/" target='_blank' rel='noopener noreferrer'>
                        itch.io
                    </Link>
                </Footer>
            </div>
        </div>
    )
}

export default App
