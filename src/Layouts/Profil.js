import { Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

export default function Profil() {
  return (
    <div id="home" className='h-screen w-full bg-no-repeat bg-cover' style={{backgroundImage:"url(./bg.jpg)"}}>
      <div className='h-full w-full bg-black bg-opacity-50'>
        <div data-aos="fade-up" className='px-0 2xl:w-3/4 w-4/5 h-full place-self-center'>
          <div className='h-full w-full grid'>
            <div className='grid xl:grid-cols-2 gap-4 items-center md:h-1/2 place-self-center'>
              <div className='h-64 xl:h-1/2 w-full grid items-center xl:pe-16'>
                <div className='h-full overflow-hidden rounded-full border-yellow-gold bg-black border-opacity-60 border-8 aspect-square place-self-center xl:place-self-end'>
                  <img src="./profil.png" className='w-full h-full scale-90 hover:scale-100 transition-transform duration-1000 object-cover' alt="" />
                </div>
              </div>
              <div className='xl:h-1/3 h-72  w-full grid'>
                <div className='text-white xl:text-start place-self-center px-0 md:px-16 xl:px-0'>
                  <p className='text-xl'>HI THERE! </p>
                  <h1 className='text-4xl xl:text-6xl font-bold my-2'>I'M <span className='text-yellow-gold'>Yasser</span></h1>
                  <p className='my-2 xl:w-5/6 xl:pe-16'>I'm Full Stack Developer, I enjoy creating smooth and user-friendly experiences while solving problems.</p>
                  <div className='flex place-self-center xl:place-self-start'>
                    <a href="https://www.instagram.com/yasser.elkaddouri/"><Instagram size={36} className='me-2 p-2 rounded-md duration-1000 hover:bg-yellow-gold hover:text-black cursor-pointer' /></a>
                    <a href="https://www.linkedin.com/in/yasserelkaddouri/"><Linkedin size={36} className='mx-2 p-2 rounded-md duration-1000 hover:bg-yellow-gold hover:text-black cursor-pointer' /></a>
                    <a href="https://github.com/turser"><Github size={36} className='mx-2 p-2 rounded-md duration-1000 hover:bg-yellow-gold hover:text-black cursor-pointer' /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
