import React, {useState} from 'react'
import { AiOutlineMenuUnfold } from "react-icons/ai";
export default function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div>
        <div className='lg:hidden pl-3'>
            <AiOutlineMenuUnfold size={30} onClick={handleNav}/>
        </div>
        {nav ? 
            (<div className='absolute flex flex-col w-screen h-screen items-center justify-center z-20 bg-[#2D2D34]'>
                <a onClick={handleNav} href='#main' className='relative flex w-[75%] m-3 p-3 shadow-lg shadow-gray-400 bg-[#B97375] rounded-full items-center justify-center hover:scale-105  ease-in duration-300 text-[#2D2D34]'>
                  <span className='pl-3'>Home</span>
                </a>
                <a onClick={handleNav} href='#experience' className='relative flex w-[75%] m-3 p-3 shadow-lg shadow-gray-400 bg-[#B97375] rounded-full items-center justify-center hover:scale-105  ease-in duration-300 text-[#2D2D34]'>
                  <span className='pl-3'>Experience</span>
                </a>
                <a onClick={handleNav} href="#projects" className='relative flex w-[75%] m-3 p-3 shadow-lg shadow-gray-400 bg-[#B97375] rounded-full items-center justify-center hover:scale-105  ease-in duration-300 text-[#2D2D34]'>
                  <span className='pl-3'>Projects</span>
                </a>
                <a onClick={handleNav} href="#certificates" className='relative flex w-[75%] m-3 p-3 shadow-lg shadow-gray-400 bg-[#B97375] rounded-full items-center justify-center hover:scale-105  ease-in duration-300 text-[#2D2D34]'>
                  <span className='pl-3'>Certificates</span>
                </a>     
              </div>):
            ('')
        }
        <div className='h-20 max-h-20 relative hidden lg:block'>    
            <div className='absolute w-full top-5' >
                <div className='border-4 rounded-xl flex w-1/3 h-10 m-auto justify-evenly items-center'>
                    <a href='#main'><ul>Home</ul></a>
                    <a href='#experience'><ul>Experience</ul></a>
                    <a href='#projects'><ul>Projects</ul></a>
                    <a href='#certificates'><ul>Certificates</ul></a>
                </div>
            </div>
        </div>
    </div>
    
  )
}
