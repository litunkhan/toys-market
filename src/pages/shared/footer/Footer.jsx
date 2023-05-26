

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import weblogo from './logo2.avif'
const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow-lg text-black py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 lg:w-1/4">
          <img src={weblogo} alt="Website Logo" className="h-16" />
          <p className="text-black text-3xl font-bold">Toys-Shop</p>
          <p className="text-black  mt-2">&copy; 2023 All rights reserved</p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mt-6 md:mt-0 ">
          <h4 className="text-black  font-medium mb-4">Contact Us</h4>
          <p className="text-black ">123 Main Street</p>
          <p className="0">City, State, ZIP</p>
          <p className=" mt-4">Email: jors@gmail.com</p>
          <p className="">Phone: (123) 456-7890</p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mt-6 md:mt-0">
          <h4 className=" font-medium mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className=" hover:text-gray-700  transition duration-300">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className=" hover:text-gray-700 transition duration-300">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className=" hover:text-gray-700  transition duration-300">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className=" hover:text-gray-700 transition duration-300">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
