import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary-teal py-10 mt-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="container-custom flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex gap-4 md:gap-8 text-white text-xs md:text-sm font-light">
            <a href="#home" className="hover:text-primary-gold transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-gold transition-colors">About Us</a>
            <a href="#contact" className="hover:text-primary-gold transition-colors">Contact</a>
            <a href="#services" className="hover:text-primary-gold transition-colors">Product and Services</a>
          </div>
          <p className="text-white text-xs md:text-sm font-light opacity-80">
            © Copy Right All Rights Reserved
          </p>
        </div>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/AdvnCityCorp" className="w-10 h-10 rounded-full bg-primary-gold flex justify-center items-center text-white text-xl hover:-translate-y-1 transition-transform">
            <i className='bx bxl-facebook'></i>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-primary-gold flex justify-center items-center text-white text-xl hover:-translate-y-1 transition-transform">
            <i className='bx bxl-tiktok'></i>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-primary-gold flex justify-center items-center text-white text-xl hover:-translate-y-1 transition-transform">
            <i className='bx bxl-youtube'></i>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-primary-gold flex justify-center items-center text-white text-xl hover:-translate-y-1 transition-transform">
            <i className='bx bxl-whatsapp'></i>
          </a>
        </div>
      </motion.div>
    </footer>
  );
};
export default Footer;
