import React from 'react'
const web = ['Html', 'Css', 'JavaScript', 'React', 'Redux', 'Tailwind', 'Bootstrap']
const data = ['Python', 'Sql', 'Tableau', 'Excel']
const profiles = {'Github':"https://github.com/jesmigeorge",'Leetcode':"https://leetcode.com/u/jesmigeorge04/", 'Tableau':"https://public.tableau.com/app/profile/jesmi.george/vizzes", 'LinkedIn':"https://www.linkedin.com/in/jesmi-george/"}
export default function Main() {
    const handleResume = ()=>{
        window.open("https://drive.google.com/file/d/1dLhB1oA-AbnTy8aACATPAPCQa6S49eLX/view?usp=sharing", '_blank')
    }
  return (
    <div id='main' className='mx-20 flex flex-col md:max-lg:justify-center lg:flex-row '>
        <div className='md:w-3/4 xl:w-1/2  mx-10 px-5 bg-[#B97375] rounded-3xl'>
            <h1 className='text-center m-2 text-2xl'>Hi I'm <i className=' font-extrabold'>JESMI GEORGE</i></h1>
            <p className='text-center lg:text-start md:ml-5 md:p-2 text-lg'>--- Undergrad at cet trivandrum</p>
            <p className='text-center lg:text-start md:ml-5 md:p-2 text-lg'>--- Frontend developer</p>
            <p className='text-center lg:text-start md:ml-5 md:p-2 text-lg'>--- Data vizualization enthusiast!!</p>
            <div className='text-center mt-5  text-lg font-semibold'>Check out my Profiles !!!</div>
            <div className='grid grid-cols-4 gap-2 mt-3 mx-5 px-3'>
                {Object.keys(profiles).map((key, index) => {
                    return (
                        <button key={index} className='bg-[#343434] mx-5 w-2/3 h-8 text-center rounded-lg py-1 px-1 lg:max-xl:text-xs sm:max-md:text-xs'><a href={profiles[key]} target="_blank">{key}</a></button>
                    )
                })}
            </div>
            <div className='flex mx-auto justify-around mt-3'>
                <button className='text-center bg-[#343434] text-white p-3 rounded-lg w-1/4 my-2' onClick={handleResume}><a>Resume</a></button>
                <button className='text-center bg-[#343434] text-white p-3 rounded-lg w-1/4 my-2'><a href="https://www.linkedin.com/in/jesmi-george/" target='_blank'>Let's Connect</a></button>
            </div>
        </div>
        <div className='md:w-3/4 xl:w-1/2 mx-10 px-5 py-5 bg-[#B97375] rounded-3xl my-5 lg:my-1'>
            <h1 className='text-center m-2 text-2xl font-extrabold'>Skills</h1>
            <div className='text-center text-lg font-bold'>Web</div>
            <div className='grid grid-cols-3 gap-3 my-3 mx-3 px-1'>
                {web.map((tech, index) => {
                    return (
                        <div key={index} className='mx-5 w-2/3 h-8 text-center bg-[#343434] rounded-lg py-1 px-1 lg:max-xl:text-xs sm:max-md:text-xs'>{tech}</div>
                    )
                })}
            </div>
            <div className='text-center text-lg font-bold'>Data Analysis</div>
            <div className='grid grid-cols-3 gap-3 my-3 mx-5 px-3'>
                {data.map((tech, index) => {
                    return (
                        <div key={index} className='py-1 mx-5 w-1/2 h-8 text-center bg-[#343434] rounded-lg px-1 lg:max-xl:text-xs sm:max-md:text-xs'>{tech}</div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
