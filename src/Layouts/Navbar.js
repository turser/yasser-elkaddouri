import React,{useState} from 'react'
import { MenuIcon, X } from 'lucide-react';

export default function Navbar() {

    const [isMenuOpen,setIsMenuOpen ] = useState(false)

    const links = [
        {name:"Home",to:"#home"},
        {name:"About",to:"#about"},
        {name:"Portfolio",to:"#portfolio"},
        {name:"Contact",to:"#contact"},
    ]

    function Menu() {
        setIsMenuOpen(!isMenuOpen)
    }

    const classUl = "bg-black xl:flex xl:items-center z-[-1] font-poppins xl:z-auto xl:static absolute w-full left-0 xl:w-auto p-5 xl:pl-0  xl:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
  return (
    <div data-aos="zoom-out" className='fixed w-full bg-black' style={{zIndex:"99"}}>
    <nav className='bg-black  xl:flex xl:items-center xl:justify-evenly shadow text-white'>

        <div className='flex justify-between items-center'>
            <span>
                <div className='text-2xl pb-1 cursor-pointer ps-4 md:ps-8 mt-2 xl:ps-0 h-20 xl:h-16 font-bold flex overflow-hidden'>
                    <img src="./logo.png" loading='lazy' className='h-full w-full object-contain' alt="" />
                </div>
            </span>
            <span className='text-3xl cursor-pointer mx-2 xl:hidden block' onClick={()=>Menu()}>
                {isMenuOpen?<X size={30}/>:<MenuIcon size={30} />}
            </span>
        </div>

        <ul className={`${classUl} ${isMenuOpen?"top-[70px] opacity-100":""}`}>
            {links.map((link)=>{
            return(
                <li className='mx-4 text-xl md:my-12 md:text-2xl xl:text-lg my-6 xl:my-0'>
                    <a href={link.to} className='hover:text-yellow-gold cursor-pointer duration-1000'>{link.name}</a>
                </li>
            )})}
        </ul>
    </nav></div>
  )
}
