import React from 'react'

export default function Experience() {
  return (
    <div id='experience' className='mx-20 mt-10 bg-[#B97375] py-3 rounded-3xl'>
        <h1 className='text-center mt-5 text-2xl  font-extrabold'>Experience</h1>
        {/* internships */}
        <div className='p-5'>
            <h2 className='text-center mb-3  text-lg font-semibold'>INTERSHIP</h2>
            <div className='flex justify-center'>
                {/* internship 1 */}
                <div className='rounded-3xl mx-5 w-full  md:w-1/3 text-center p-5 h-64 md:h-96 lg:h-80 xl:h-64 bg-[#343434] md:max-lg:text-sm'>
                    <h3>Web Development Intern</h3>
                    <p className='my-3 text-justify sm:max-md:text-sm'>
                        Reduced codebase complexity by migrating to ReduxJS Toolkit, resulting in streamlined state management
                        architecture with minimized boilerplate.
                        Enhanced the UI aesthetics of the web application.
                    </p>
                    <ul className='flex justify-center mx-auto'>
                        <li className='border-solid border-2 border-[#CEB1BE] rounded-full m-2  w-3/5 md:max-lg:w-2/3'>React</li>
                        <li className='border-solid border-2 border-[#CEB1BE] rounded-full m-2  w-3/5 md:max-lg:w-2/3'>Redux</li>
                        <li className='border-solid border-2 border-[#CEB1BE] rounded-full m-2  w-3/5 md:max-lg:w-2/3'>Tailwind</li>
                    </ul>
                    <a href="https://drive.google.com/file/d/1DUFf9FK0pw3wYx0dPMprf-zlhl5TeH-N/view" target="_blank"><button className='border-solid border-2 border-[#CEB1BE] rounded-full mt-2  w-1/3 md:max-lg:w-2/3'>Certificate</button></a>
                </div>
                {/* internship 2 */}
                {/* internship 3 */}
            </div>
        </div>
        {/* positions */}
        <div  className='px-5 py-2'>
            <h2 className='text-center my-3  text-lg font-semibold'>POSITIONS</h2>
            <div className='grid px-4 mx-5 justify-center'>
                <section className='my-2 rounded-xl w-full p-2 text-center bg-[#343434]'>
                    <strong>CP(competitive coding) admin of CSCP(Cyber security and competitive coding).</strong>
                    <p className='text-center'>October 2022</p>
                </section>
                <section className='my-2 rounded-xl w-full p-2 text-center bg-[#343434]'>
                    <strong>Technical Head of IET on campus Club</strong>
                    <p className='text-center'>November 2023</p>
                </section>
                <section className='my-2 rounded-xl w-full p-2 text-center bg-[#343434]'>
                    <strong>IEEE SB CET Web Designer</strong>
                    <p className='text-center'>February 2024</p>
                </section>
            </div>
        </div>
    </div>
  )
}
