import React from 'react'
import cocaine from '../assets/cocaine.png'
import covid from '../assets/covid.png'
import customer from '../assets/customer.png'
import execSales from '../assets/execSales.png'
import softDrinks from '../assets/softDrinks.png'
export default function Project() {
  return (
    <div id='projects' className='mt-5 bg-[#B97375] py-3 rounded-3xl mx-20 md:max-lg:text-sm'>
        <h2 className='text-center mb-3 text-2xl font-extrabold mx-3'>Web Projects</h2>
            <div className='flex flex-wrap justify-center'>
                {/* project 1 */}
                <div className='rounded-xl mx-5 w-full  md:w-1/3 text-center p-5 h-64 md:max-lg:h-80 lg:h-80 xl:h-64  my-3 bg-[#343434]'>
                    <h3>Best Eats - Food App</h3>
                    <p className='my-3 text-justify'>
                        Developed a web application showcasing a restaurant’s 
                        menu and promotions. Implemented
                        an intuitive collapsible sidebar and integrated 
                        functionality for filtering the menu based on user-selected options such
                    </p>
                    <a href="https://best-eats-hotel.netlify.app/" target='_blank'><button className='text-center bg-black text-white p-3 rounded-lg w-1/3'>Link</button></a>
                </div>
                {/* project 2 */}
                <div className='rounded-xl mx-5 w-full  md:w-1/3 text-center p-5 h-64 md:h-96 lg:h-80 xl:h-64  my-3 bg-[#343434]'>
                    <h3>News App</h3>
                    <p className='my-3 text-justify'>
                        Developed a feature-rich News App using React and Bootstrap, seamlessly integrating the News API to fetch and display news articles from various categories, with user-friendly features such as infinite scrolling and a top loader bar
                    </p>
                    <a href="https://github.com/jesmigeorge/News-App" target='_blank'><button className='text-center bg-black text-white p-3 rounded-lg w-1/3'>Link</button></a>
                </div>
                {/* project 3 */}
                <div className='rounded-xl mx-5 w-full  md:w-1/3 text-center p-5 h-64 md:h-96 lg:h-80 xl:h-64  my-3 bg-[#343434]'>
                    <h3>StarBucks UI Clone</h3>
                    <p className='my-3 text-justify'>
                        Built a model of the StarBucks Website with popups on register or login, with responsive navbar.
                    </p>
                    <a href="https://jesmigeorge.github.io/Starbucks-Clone/" target='_blank'><button className='text-center bg-black text-white p-3 rounded-lg w-1/3'>Link</button></a>
                </div>
                {/* project 4 */}
                <div className='rounded-xl mx-5 w-full  md:w-1/3 text-center p-5 h-64 md:h-96 lg:h-80 xl:h-64  my-3 bg-[#343434]'>
                    <h3>Leetcode Recommendation System</h3>
                    <p className='my-3 text-justify'>
                        Implemented a Leetcode Recommendation System web application using React and Bootstrap for the frontend, backed by a Flask server,powered by the OpenAI API tointelligently fetch and categorize questions based on user input prompts.
                    </p>
                    <a href="https://github.com/jesmigeorge/Leetcode-Recommendation" target='_blank'><button className='text-center bg-black text-white p-3 rounded-lg w-1/3'>Link</button></a>
                </div>
                {/* project 5 */}
                <div className='rounded-xl mx-5 w-full  md:w-1/3 text-center p-5 h-64 md:h-96 lg:h-80 xl:h-64  my-3 bg-[#343434]'>
                    <h3>Web Scraping</h3>
                    <p className='my-3 text-justify'>
                        Scraped naukri.com website using python selenium module to automate the collection of popular python courses and their details in that website. Increased efficiency of course research process.
                    </p>
                    <a href="https://nbviewer.org/github/jesmigeorge/Scraping-website-to-get-trending-courses/blob/master/naukri.Com.ipynb" target='_blank'><button className='text-center bg-black text-white p-3 rounded-lg w-1/3'>Link</button></a>
                </div>
            </div>
        <h2 className='text-center mb-3 text-2xl  font-extrabold mt-5'>Tableau Dashboards</h2>
            <div className='grid grid-cols-3 gap-3 my-3 mx-5 px-5'>
                <section className='rounded-xl justify-self-center p-3 bg-[#343434]'>
                    <img src={cocaine} alt="" />
                    <a href="https://public.tableau.com/app/profile/jesmi.george/viz/TheCostofCocaine_17148454981090/Dashboard1" target="_blank"><div className='text-center bg-black text-white p-3 rounded-lg sm:max-md:w-2/3 w-1/3 my-2  mx-auto text-xs md:text-base'>Vizz</div></a>
                </section>
                <section  className='rounded-xl justify-self-center  p-3 bg-[#343434]'>
                    <img src={covid} alt="" />
                    <a href="https://public.tableau.com/app/profile/jesmi.george/viz/Covid19CasesIndia_17147931795390/Dashboard1" target="_blank"><div className='text-center bg-black text-white p-3 rounded-lg sm:max-md:w-2/3 w-1/3 my-2  mx-auto text-xs md:text-base'>Vizz</div></a>
                </section>
                <section  className='rounded-xl justify-self-center  p-3 bg-[#343434]'>
                    <img src={customer} alt="" />
                    <a href="https://public.tableau.com/app/profile/jesmi.george/viz/CustomerSalesAnalysis_17147093045750/CustomerSalesAnalysis" target="_blank"><div className='text-center bg-black text-white p-3 rounded-lg sm:max-md:w-2/3 w-1/3 my-2  mx-auto text-xs md:text-base'>Vizz</div></a>
                </section>
                <section  className='rounded-xl justify-self-center  p-3 bg-[#343434] text-xs md:text-base'>
                    <img src={execSales} alt="" />
                    <a href="https://public.tableau.com/app/profile/jesmi.george/viz/Containers-SalesDashboard/Dashboard1" target="_blank"><div className='text-center bg-black text-white p-3 rounded-lg sm:max-md:w-2/3 w-1/3 my-2  mx-auto text-xs md:text-base'>Vizz</div></a>
                </section>
                <section  className='rounded-xl justify-self-center  p-3 bg-[#343434]'>
                    <img src={softDrinks} alt="" />
                    <a href="https://public.tableau.com/app/profile/jesmi.george/viz/SoftDrinksSalesAnalysis/SoftDrinksSalesDashboard" target="_blank"><div className='text-center bg-black text-white p-3 rounded-lg sm:max-md:w-2/3 w-1/3 my-2  mx-auto text-xs md:text-base'>Vizz</div></a>
                </section>
            </div>
    </div>
  )
}
