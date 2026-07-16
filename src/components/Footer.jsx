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
        className="container-custom flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-6"
      >
        {/* Navigation & Copyright */}
        <div className="flex flex-col gap-4 items-center md:items-start md:w-1/4">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-white text-xs md:text-sm font-light">
            <a href="#home" className="hover:text-primary-gold transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-gold transition-colors">About Us</a>
            <a href="#contact" className="hover:text-primary-gold transition-colors">Contact</a>
            <a href="#services" className="hover:text-primary-gold transition-colors">Product and Services</a>
          </div>
          <p className="text-white text-xs md:text-sm font-light opacity-80">
            © Copy Right All Rights Reserved
          </p>
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-3 items-center md:items-start md:w-1/4">
          <h3 className="text-white text-sm md:text-base font-semibold">Support</h3>
          <div className="flex flex-col gap-2 text-white text-xs md:text-sm font-light items-center md:items-start">
            <a href="#" className="hover:text-primary-gold transition-colors">Data Privacy Policy</a>
            <a href="#" className="hover:text-primary-gold transition-colors">Terms and Condition</a>
          </div>
        </div>

        {/* BIR Seal Image */}
        <div className="flex justify-center md:justify-start md:w-1/4">
          <img 
            src="/images/bir-seal.png" 
            alt="Bureau of Internal Revenue Seal" 
            className="h-16 md:h-20 object-contain bg-white/10 rounded p-2"
          />
        </div>

        {/* Socials */}
        <div className="flex gap-4 md:w-1/4 justify-center md:justify-end">
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
