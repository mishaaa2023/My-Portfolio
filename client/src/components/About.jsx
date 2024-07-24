import { motion, useAnimation } from "framer-motion";

const About = () => {


  return (
    <motion.div className='flex flex-wrap items-center gap-8 justify-center py-7 my-3 px-5 'id='about'>
      
        <motion.div 
        className='w-[29rem] h-[12rem] flex flex-col gap-2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 3 }}
        >
            <h1 className='text-underline lobster-regular lg:text-[4rem] text-[2rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>About me</h1>
          <p className='poppins-regular  font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>Hi and Thankyou for visiting my Portfolio.I'm Mysha a Website Developer. I have experience in building websites using HTML,CSS and JavaScript.Apart from that I have expertise in React and Nextjs.I also know MERN stack for backend development.
            
          </p>
         
        </motion.div>
        <motion.div
       initial={{ y: -10 }}
       animate={{ y: 10 }}
       transition={{
         duration: 2,
         ease: "easeInOut",
         repeat: Infinity,
         repeatType: "reverse"
       }}
        >
            <img src="/IMG.jpeg" alt="" className='shadow-md h-[20rem] lg:h-[29rem] lg:w-[29rem] w-[16rem] mt-6 object-cover  object-top'/>
        </motion.div>
    </motion.div>
  )
}



export default About