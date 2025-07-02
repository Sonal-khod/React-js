import React from 'react'
import { Routes, Route, NavLink  } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'  
import Contact from './components/Contact'
import Lab from './components/Lab'
import Notfound from './components/Notfound' 

const App = () => {
  return (
    <div className="flex flex-col justify-center  text-2xl">
      <nav className='bg-blue-500'>
        <ul className="flex gap-4  p-4  text-white justify-baseline px-10 gap-10">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/lab">Lab</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App
