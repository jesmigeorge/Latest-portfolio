import React from 'react'
const web = ['Html', 'Css', 'JavaScript', 'React', 'Redux', 'Tailwind', 'Bootstrap']
const data = ['Python', 'Sql', 'Tableau', 'Excel']
const profiles = {'Github':"https://github.com/jesmigeorge",'Leetcode':"https://leetcode.com/u/jesmigeorge04/", 'Tableau':"https://public.tableau.com/app/profile/jesmi.george/vizzes", 'LinkedIn':"https://www.linkedin.com/in/jesmi-george/"}
export default function Main() {
    const handleResume = ()=>{
        window.open("https://drive.google.com/file/d/1WE7Yj9RvrMN9SGALCbmJimlhCwNl7EZa/view?usp=sharing", '_blank')
    }
  return (
    <div id='main' className='mx-20 flex flex-col md:max-lg:justify-center lg:flex-row '>
        <div className='md:w-3/4 xl:w-1/2  mx-10 px-5 bg-[#B97375] rounded-3xl'>
            <h1 className='text-center m-2 text-2xl text-black'>Hi I'm <i className=' font-extrabold'>JESMI GEORGE</i></h1>
            <p className='text-center lg:text-start md:ml-5 md:p-2 text-lg text-black'>Undergrad at cet trivandrum</p>
            <p className='text-center lg:text-start md:ml-5 md:p-2 text-lg text-black'>Frontend developer</p>
            <p className='text-center lg:text-start md:ml-5 md:p-2 text-lg text-black'>Data vizualization enthusiast!!</p>
            <div className='text-center mt-5  text-lg font-semibold text-black'>Check out my Profiles !!!</div>
            <div className='grid grid-cols-4 gap-2 mt-3 mx-5 px-3'>
                {Object.keys(profiles).map((key, index) => {
                    return (
                        <button key={index} className='bg-gradient-to-r from-blue-400 to-emerald-400 text-black font-semibold mx-5 w-2/3 h-8 text-center rounded-lg py-1 px-1 lg:max-xl:text-xs sm:max-md:text-xs hover:scale-110  ease-in duration-300
                         hover:bg-gradient-to-r  hover:from-teal-400 hover:to-yellow-200 hover:text-black hover:font-semibold'><a href={profiles[key]} target="_blank">{key}</a></button>
                    )
                })}
            </div>
            <div className='flex mx-auto justify-around mt-3'>
                <button className='hover:scale-110  ease-in duration-300 text-center bg-gradient-to-r from-blue-400 to-emerald-400 text-black font-semibold p-3 rounded-lg w-1/4 my-2 hover:bg-gradient-to-r  hover:from-teal-400 hover:to-yellow-200 hover:text-black hover:font-semibold' onClick={handleResume}><a>Resume</a></button>
                <button className='hover:scale-110  ease-in duration-300 text-center bg-gradient-to-r from-blue-400 to-emerald-400 text-black font-semibold p-3 rounded-lg w-1/4 my-2 hover:bg-gradient-to-r   hover:from-teal-400 hover:to-yellow-200 hover:text-black hover:font-semibold'><a href="https://www.linkedin.com/in/jesmi-george/" target='_blank'>Let's Connect</a></button>
            </div>
        </div>
        <div className='md:w-3/4 xl:w-1/2 mx-10 px-5 py-5 bg-[#B97375] rounded-3xl my-5 lg:my-1'>
            <h1 className='text-center m-2 text-2xl font-extrabold text-black'>Skills</h1>
            <div className='text-center text-lg font-bold text-black'>Web</div>
            <div className='grid grid-cols-3 gap-3 my-3 mx-3 px-1'>
                {web.map((tech, index) => {
                    return (
                        <div key={index} className='bg-gradient-to-r from-blue-400 to-emerald-400 text-black font-semibold mx-5 w-2/3 h-8 text-center bg-[#343434] rounded-lg py-1 px-1 lg:max-xl:text-xs sm:max-md:text-xs '>{tech}</div>
                    )
                })}
            </div>
            <div className='text-center text-lg font-bold text-black'>Data Analysis</div>
            <div className='grid grid-cols-3 gap-3 my-3 mx-5 px-3'>
                {data.map((tech, index) => {
                    return (
                        <div key={index} className='bg-gradient-to-r from-blue-400 to-emerald-400 text-black font-semibold py-1 mx-5 w-1/2 h-8 text-center bg-[#343434] rounded-lg px-1 lg:max-xl:text-xs sm:max-md:text-xs'>{tech}</div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
