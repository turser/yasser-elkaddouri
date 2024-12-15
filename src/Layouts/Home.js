import React,{useEffect} from 'react'
import Profil from './Profil'
import About from './About'
import Projects from './Projects'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './Contact';

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      {/* Profil */}
      <Profil />

      {/* About Me */}
      <About />

      {/* Porfolio */}
      <Projects />

      {/* Contact */}
      <Contact />
    </div>
  )
}
