import React from 'react'

export default function Experience() {
  return (
    <div id='experience' className='mx-20 mt-10 bg-[#B97375] py-3 rounded-3xl'>
        <h1 className='text-center mt-5 text-2xl text-black  font-extrabold'>Experience</h1>
        {/* internships */}
        <div className='p-5'>
            <h2 className='text-center mb-3  text-lg font-semibold text-black'>INTERNSHIP</h2>
            <div className='flex justify-center'>
                {/* internship 1 */}
                <div className='hover:scale-95 ease-in-out duration-300 rounded-3xl mx-5 w-full  md:w-1/3 text-center p-5 h-64 md:h-96 lg:h-80 xl:h-64 bg-[#343434] md:max-lg:text-sm bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 '>
                    <h3 className='text-lg font-bold'>Web Development Intern</h3>
                    <h4 className='text-lg font-bold'>Company Name -  Solyield</h4>
                    <p className='my-3 text-justify sm:max-md:text-sm'>
                        Reduced codebase complexity by migrating to ReduxJS Toolkit with minimized boilerplate.
                        Enhanced the UI aesthetics of the web application.
                    </p>
                    <ul className='flex justify-center mx-auto'>
                        <li className='m-1  w-3/5 md:max-lg:w-2/3'>React</li>
                        <li className='m-1  w-3/5 md:max-lg:w-2/3'>Redux</li>
                        <li className='m-1  w-3/5 md:max-lg:w-2/3'>Tailwind</li>
                    </ul>
                    <a href="https://drive.google.com/file/d/1DUFf9FK0pw3wYx0dPMprf-zlhl5TeH-N/view" target="_blank"><button className='border-solid border-2 border-[#CEB1BE] rounded-lg mt-1  w-1/3 md:max-lg:w-2/3 hover:scale-105  ease-in duration-300 bg-gradient-to-r from-blue-400 to-emerald-400 text-black hover:bg-gradient-to-r  hover:from-teal-400 hover:to-yellow-200 hover:text-black hover:font-semibold'>Certificate</button></a>
                </div>
                {/* internship 2 */}
                {/* internship 3 */}
            </div>
        </div>
        {/* positions */}
        <div  className='px-5 py-2'>
            <h2 className='text-center my-3  text-lg font-semibold text-black'>POSITIONS</h2>
            <div className='grid px-4 mx-5 justify-center'>
                <section className='my-2 rounded-xl w-full p-2 text-center bg-[#343434] hover:scale-105  ease-in duration-300 bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 '>
                    <strong>CP(competitive coding) admin of CSCP(Cyber security and competitive coding).</strong>
                    <p className='text-center'>October 2022</p>
                </section>
                <section className='my-2 rounded-xl w-full p-2 text-center bg-[#343434] hover:scale-105  ease-in duration-300 bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 '>
                    <strong>Technical Head of IET on campus Club</strong>
                    <p className='text-center'>November 2023</p>
                </section>
                <section className='my-2 rounded-xl w-full p-2 text-center bg-[#343434] hover:scale-105  ease-in duration-300 bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 '>
                    <strong>IEEE SB CET Web Designer</strong>
                    <p className='text-center'>February 2024</p>
                </section>
            </div>
        </div>
    </div>
  )
}
