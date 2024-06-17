import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Experience from './components/Experience'
import Project from './components/Project'
import Certificates from './components/Certificates'
function App() {
  return (
    <div className='bg-[#2D2D34] text-white'>
      <Navbar />
      <Main />
      <Experience />
      <Project />
      <Certificates />
    </div>
  )
}

export default App
