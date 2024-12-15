import React from 'react'
import { MoveDown } from 'lucide-react'

export default function About() {

  const infos = [
    {title:"Name",value:"Yasser EL KADDOURI"},
    {title:"Birthdate",value:"29 October 2002"},
    {title:"Email",value:"yasserelkaddouri7@gmail.com"},
    {title:"Adress",value:"Nador"}
  ]

  const skills = [
    {desc:"Creating responsive and dynamic user interfaces with React.js.",
    hoverUrl:"./reactHov.png", url:"./react.png" ,name:"React.js",title:"Front End"},
    {desc:"Building secure and efficient back-end systems using Laravel.", 
    hoverUrl:"./laravelHov.png", url:"./laravel.png" ,name:"Laravel",title:"Back End"},
    {desc:"Designing and managing reliable MySQL databases and tables.", 
    hoverUrl:"./mysqlHov.png", url:"./mysql.png" ,name:"MySQL",title:"Database"}
  ]
  
  return (
    <div id="about" className='h-full w-full bg-black'>    
    <div className='xl:h-auto px-2  md:px-0 xl:px-0 2xl:w-3/4 md:w-5/6 place-self-center pt-24 overflow-hidden'>
      <div data-aos="fade-up" className='grid xl:grid-cols-2 gap-8 h-full pb-0 md:w-4/5 justify-self-center px-2 md:px-0'>
        <div className='h-full text-start rounded-xl bg-opacity-50 py-4 mb-12 md:mb-24 xl:mb-0'>
            <h3 className='text-xl text-yellow-gold  font-bold'>Discover</h3>
            <h1 className='text-5xl text-white font-bold my-2'>About Me</h1>
            <hr className='border-yellow-gold w-1/6'/>
            <p className='text-white my-2 text-md leading-relaxed tracking-wide'>
            My name is Yasser EL KADDOURI, I'm a Full Stack Developer based in Nador, Morocco. I'm very 
            passionate and dedicated to my work. I have acquired the skills to build great and premium websites.
            </p>
            <div className='mt-4 border-2 border-yellow-gold grid p-8'>
              {infos.map((info)=>{return(
              <div className='flex text-white leading-loose md:text-md text-nowrap'>
                <div className='uppercase font-semibold'>{info.title}:</div>
                <div className='font-bold text-gray-400 mx-2'>{info.value}</div>
              </div>
              )})}
            </div>
            <a href="#portfolio">
              <button className='group my-2 flex bg-yellow-gold hover:bg-yellow-500 duration-200 p-4 cursor-pointer rounded-md'>
                <MoveDown className='me-2 group-hover:animate-bounceY' size={22}/> 
                PROJECTS
              </button>
            </a>
        </div>
        <div className='h-full mb-8'>
          <img src="./goldpanther1.png" className="cursor-pointer hover:scale-90 duration-1000 justify-self-center object-cover" alt='' />
        </div>
      </div>
      <div className='mt-24 xl:mt-36 mb-12'>
        <h1 data-aos="fade-down" className='text-yellow-gold text-5xl pb-6 tracking-widest'>SKILLS</h1>
        <hr className='w-full border-0 h-2 bg-gradient-to-r from-black via-yellow-gold to-black'/>
        
      </div>
      <div className='h-full grid lg:grid-cols-3 lg:gap-4 xl:gap-4 gap-4 mb-12 p-4'>
        {skills.map((skill)=>{return(
          <div data-aos="fade-up" className='bg-customGray cursor-pointer px-16 lg:px-6 xl:px-8 py-5 pt-16 pb-16 hover:bg-yellow-gold duration-700 h-full w-full xl:w-5/6 place-self-center text-start group'>
            <div className="group relative w-24 h-24 overflow-hidden mb-4 group-hover:-translate-y-4 duration-700">
                {/* Default Image */}
                <img
                  src={skill.url}
                  alt="Default"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                />
                {/* Hover Image */}
                <img
                  src={skill.hoverUrl}
                  alt="Hover"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                />
              </div>
            <h1 className='text-2xl font-bold text-white mb-8 group-hover:text-black duration-700'>{skill.title}</h1>
            <p className='text-gray-300 group-hover:text-gray-700 duration-700 tracking-widest leading-loose '>{skill.desc}</p>
          </div>
        )})} 
      </div>

 
    </div>
    </div>
  )
}
