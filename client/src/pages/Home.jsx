import React from 'react'
import { Link } from 'react-router-dom'
import {Typewriter} from 'react-simple-typewriter'
import GradientButton from '../components/GradientButton'
import { BsMouseFill } from "react-icons/bs";
import ProjectCard from '../components/ProjectCard';

import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import About from '../components/About';
import { motion } from 'framer-motion';

const Home = () => {


  return (
    <>
       <motion.div 
       className='flex flex-wrap items-center gap-8 justify-center py-9  px-5 '
       initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
       >
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 3 }}
        >
            <img src="/IMG.jpeg" alt="" className='h-[20rem] lg:h-[29rem] lg:w-[29rem] w-[16rem] mt-6 object-cover  object-top'/>
        </motion.div>
        <div className='w-[35rem] h-[14rem] flex flex-col flex-wrap gap-2'>
            <h1 className=' text-center lg:text-[2.7rem] text-[2.9rem] bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500  font-bold '>Hi,I'm Mysha a
            <br/>
           <span className='margarine-regular lg:text-[4rem] text-[3.3rem] bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500  font-bold'>
           <Typewriter
            words={['Web Developer', 'MERN developer', 'Prorammer', 'Copywriter','Flutter Developer']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
           </span>
          </h1>
          <Link to={'/Mysha fatima (3).png'}><GradientButton>Download CV</GradientButton></Link>
            </div>
    </motion.div>
    
    
<div>
<Skills/>
</div>
<About/>
    <Projects/>
     <ContactForm/>
     <Footer/>
    </>
  )
}

export default Home