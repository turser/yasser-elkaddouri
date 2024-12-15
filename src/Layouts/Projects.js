import React from 'react'

export default function Projects() {
  return (
    <div id="portfolio" className='p-24 w-full' >
      <div className='xl:w-4/5 justify-self-center'>
        <h1 data-aos="fade-right" className='uppercase text-5xl text-black font-bold text-start tracking-widest'>Portfolio</h1>
        <div className='grid xl:grid-cols-5 py-12 gap-8'>
          <div data-aos="fade-right" className='xl:col-span-3 py-2 order-2 xl:order-1'>
            <h1 className='text-3xl font-bold text-start pb-12'>WordPress Orders Manager</h1>
            <p className='tracking-wide text-start leading-relaxed xl:pe-16'>
            This website is a robust, Laravel-based platform designed to streamline data integration and automation for eCommerce operations. It connects seamlessly with WordPress eCommerce websites through a REST API to fetch and organize essential data. The system efficiently structures this data within a well-optimized database for easy management and access.
            <br/>The platform goes a step further by automating order processing. Using a delivery company's API, it confirms and processes orders automatically, ensuring fast and reliable logistics operations. With its powerful backend capabilities, this website simplifies eCommerce data management, enhances operational efficiency, and delivers a smooth experience for businesses and their customers.

            <p className='text-xl font-bold pt-4 pb-2'>Key Features:</p>
            <span className='font-bold'>Seamless WordPress Integration:</span> Fetch data such as product listings, orders, and customer details using the REST API.
            <br/><span className='font-bold'>Structured Data Management:</span> Organize and store fetched data in a reliable, structured database for efficient handling and reporting.
            <br/><span className='font-bold'>Automated Order Confirmation:</span> Automatically confirm and process orders through a delivery company's API, reducing manual intervention and errors.
            <br/><span className='font-bold'>Built on Laravel Framework:</span> Leverages Laravel's secure and scalable architecture to ensure high performance and reliability.
            </p>
          </div>
          <div data-aos="fade-up" className='grid gap-4 h-full w-full xl:col-span-2 py-2 order-1 xl:order-2'>
            <img src="./Portfolio/3.png" className='rounded-2xl object-cover h-52 justify-self-center shadow-xl shadow-gray-600 hover:scale-110 duration-1000' alt="" />
            <img src="./Portfolio/2.png" className='rounded-2xl object-cover h-52 justify-self-center shadow-xl shadow-gray-600 hover:scale-110 duration-1000' alt="" />
            <img src="./Portfolio/1.png" className='rounded-2xl object-cover h-52 justify-self-center shadow-xl shadow-gray-600 hover:scale-110 duration-1000' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
