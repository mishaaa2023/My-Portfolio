import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer class="py-12">
      <div class="container mx-auto p-4">
        <div class="flex flex-wrap justify-center mb-4">
          <Link to={''} class="text-white hover:text-pink-500 transition duration-300 ease-in-out mr-4">
            <FaFacebook size={24} />
          </Link>
          <Link to={''} class="text-white hover:text-pink-500 transition duration-300 ease-in-out mr-4">
            <FaLinkedin size={24} />
          </Link>
          {/* <Link to={''} class="text-white hover:text-pink-500 transition duration-300 ease-in-out mr-4">
            <FaTwitter size={24} />
          </Link> */}
          <Link to={''} class="text-white hover:text-pink-500 transition duration-300 ease-in-out mr-4">
            <FaInstagram size={24} />
          </Link>
          <Link to={''} class="text-white hover:text-pink-500 transition duration-300 ease-in-out mr-4">
            <FaGithub size={24} />
          </Link>
        </div>
        <p class="text-lg text-white text-center mb-4">
          &copy; 2024 Misha's Portfolio. All rights reserved.
        </p>
        <p class="text-sm text-white text-center">
          Built with ❤️ using React, Vite, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;