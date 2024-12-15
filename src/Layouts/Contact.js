import { Mail, MapPin, MoveRight } from 'lucide-react'
import React from 'react'

export default function Contact() {

  return (
<div id="contact" className='h-auto xl:h-96'>
  <div className='w-full h-full bg-black text-white bg-right-top xl:bg-top bg-cover bg-no-repeat' style={{backgroundImage:"url(./locbg.jpg)"}}>
    <div className='w-full h-full bg-black bg-opacity-50 pt-24'>
      <div className='h-full xl:w-4/5 justify-self-center grid xl:grid-cols-2 gap-8 xl:gap-0'>
        <div data-aos="fade-right" className='h-full'>
          <h1 className='uppercase text-3xl text-white font-bold xl:ps-0 xl:text-start tracking-widest'>Contact Me</h1>
          <div data-aos="fade-right" className='overflow-hidden flex xl:block justify-center xl:ms-24 mt-8'>
            <img src="./logo.png" className='w-1/4' loading='lazy' alt="" />
          </div>
        </div>
        <div className='grid xl:grid-cols-2 gap-12 pb-8  text-white px-4 xl:px-0'>
          <div data-aos="fade-up" className='h-full pb-8 bg-gray-400 rounded-xl bg-opacity-60 group hover:text-black duration-1000 cursor-pointer'>
            <div className='p-4 pt-16'>
              <MapPin size={42} className='justify-self-center place-self-center group-hover:animate-bounceY' />
              <h1 className='mt-6 text-xl tracking-wider font-bold cursor-pointer'>Nador, Morocco</h1>
            </div>
          </div>
          <a href="mailto:yasserelkaddouri7@gmail.com">
            <div data-aos="fade-up" className='h-full pb-8 bg-gray-400 rounded-xl bg-opacity-60 group hover:text-black duration-1000 cursor-pointer'>
              <div className='p-4 pt-16'>
                <div className='justify-self-center place-self-center'>
                  <Mail size={42} className='opacity-100 mt-1 group-hover:animate-bounceY'/>              
                </div>
                <h1 className='mt-6 text-xl tracking-wider font-bold cursor-pointer'>yasserelkaddouri7@gmail.com</h1>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
