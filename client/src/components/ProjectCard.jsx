import React from 'react';
import {motion} from 'framer-motion'

const ProjectCard = ({ image, title, description, techStack, url }) => {
  return (
    <motion.div 
    className="max-w-sm mx-auto bg-gradient-to-r from-purple-500 to-pink-500  rounded-xl shadow-md overflow-hidden"
    initial={{ y: -10 }}
       animate={{ y: 10 }}
       transition={{
         duration: 1,
         ease: "easeInOut",
         repeat: Infinity,
         repeatType: "reverse"
       }}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="poppins-medium  text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#1b105c] to-[#380b4d]  font-bold">{title}</h2>
        <p className="poppins-regular  bg-clip-text text-transparent bg-gradient-to-r from-[#1b105c] to-[#380b4d]  font-bold">{description}</p>
        <p className="poppins-regular  bg-clip-text text-transparent bg-gradient-to-r from-[#1b105c] to-[#380b4d]  font-bold text-sm">
          Built with: {techStack.join(', ')}
        </p>
        
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-900 transition duration-300 ease-in-out"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;