import React,{ useState } from 'react';
import emailjs from '@emailjs/browser';

import { motion, useInView } from "framer-motion";


const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState('Send');
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        'service_6bt0t3p',
        'template_zl7bxkm',
        e.target,
        'YWuZwR0OuCc1ACdGd'
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };
  
  const ref = React.createRef();
  const isInView = useInView(ref);


  return (
   
    <section className="h-screen flex items-center justify-center ">
      <div className="container mx-auto p-4">
        <motion.h2
         className="lobster-regular lg:text-[4rem] ext-[2rem]  mb-4 text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
        >Get in Touch</motion.h2>
        <p className="text-lg mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 text-center">Let's talk about your project!</p>
        <form className="flex flex-wrap -mx-4 justify-center"onSubmit={sendEmail}>
          
          <input type="text" name="user_name"  className="text-white placeholder-white bg-gradient-to-tl from-pink-500 to-purple-500 w-full md:w-1/2 lg:w-2/3 xl:w-3/4 px-6 py-2 mb-4 text-lg rounded-lg" placeholder="Name"/>
          
          <input type="text" name="user_email"  className="text-white placeholder-white bg-gradient-to-tl from-pink-500 to-purple-500 w-full md:w-1/2 lg:w-2/3 xl:w-3/4 px-6 py-2 mb-4 text-lg rounded-lg" placeholder="Email"/>
          
          <textarea name="message"  className="text-white placeholder-white bg-gradient-to-tl from-pink-500 to-purple-500 w-full p-6 mb-4 text-lg rounded-lg" placeholder="Message" rows="5"></textarea>
          <motion.button className="text-white bg-pink-500 hover:bg-purple-500  font-bold py-4 px-6 rounded"
         
          ref={ref}
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          
          
        }
      }
          >Send</motion.button>
        </form>
      </div>
    </section>
  );
};
export default ContactForm;


