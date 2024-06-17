import React from 'react'

export default function Certificates() {
  return (
        <div  className='px-5 mt-7 bg-[#B97375] py-3 rounded-3xl mx-20' id='certificates'>
            <h2 className='text-center my-3 text-2xl  font-extrabold'>Certificates</h2>
            <div className='grid px-4 mx-5 justify-center'>
                <section className='my-2 rounded-lg w-full p-2 text-center bg-[#343434]'>
                    <strong>Tableau Certified Data Analyst: Top Exam Prep Course</strong>
                    <p className='text-center'>UDEMY - Issued May 2024</p>
                    <div className='border-solid border-2 border-[#CEB1BE] rounded-full w-1/4 h-8 text-center mx-auto mt-1'><a href="https://drive.google.com/file/d/1b8yEEZTbP2zXgm3KkbOLN8ZNH0yijTEV/view?usp=sharing" target="_blank">Credentials</a></div>
                </section>
                <section className='my-2 rounded-lg w-full p-2 text-center bg-[#343434]'>
                    <strong>Programming Data Structures and Algorithms Using Python</strong>
                    <p className='text-center'>SWAYAM NPTEL - Issued April 2023</p>
                    <div className='border-solid border-2 border-[#CEB1BE] rounded-full w-1/4 h-8 text-center mx-auto mt-1'><a href="https://archive.nptel.ac.in/content/noc/NOC23/SEM1/Ecertificates/106/noc23-cs15/Course/NPTEL23CS15S4578104503057490.jpg" target="_blank">Credentials</a></div>  
                </section>
                {/* <section className='my-2 border-solid border-2 border-blue-400 w-full p-2 text-center'>
                    <strong>IEEE SB CET Web Designer</strong>
                    <p className='text-center'>February 2024</p>
                </section> */}
            </div>
        </div>
  )
}
