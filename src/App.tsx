import { Route, Routes } from 'react-router-dom';

import './css/Main.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import GameDevCorner from './pages/GameDevCorner';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Dropdown from './components/Dropdown';

function App() {
  console.log(location.pathname);
  return (
    <>
      <div className='flex flex-col'>
        {/* <Navbar /> */}
        <Dropdown>

        </Dropdown>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blog/*' element={<Blog />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/game_dev_corner' element={<GameDevCorner />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App
