import { Route, Routes } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import GameDevCorner from './pages/GameDevCorner';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  console.log(location.pathname);
  return (
    <>
      <div className='w-screen h-auto min-h-screen justify-center'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blog/*' element={<Blog />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/game_dev_corner' element={<GameDevCorner />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
