import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../assets/sider.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container-custom pt-6 pb-4 relative z-50"
    >
      <div className="relative">
        <div className="flex justify-between items-center bg-bg-secondary rounded-full px-6 py-3">
          <img src={Logo} alt="Logo" className="h-10 object-contain" />

          <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
            <Link to="/" className="hover:text-primary-gold transition-colors text-text-dark">Home</Link>
            <a href="/#about" className="hover:text-primary-gold transition-colors text-text-dark">About</a>
            <a href="/#contact" className="hover:text-primary-gold transition-colors text-text-dark">Contact</a>
          </nav>

          <Link to="/services" className="hidden md:block bg-primary-teal text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-primary-teal-hover hover:scale-105 hover:shadow-lg transition-all whitespace-nowrap cursor-pointer">
            Product & Services
          </Link>

          <button
            className="md:hidden p-2 text-2xl mr-2 text-text-dark hover:text-primary-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`}></i>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-bg-secondary rounded-2xl shadow-xl overflow-hidden md:hidden"
            >
              <div className="flex flex-col p-4 gap-2">
                <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-primary-gold transition-colors text-text-dark font-medium px-4 py-2 hover:bg-black/5 rounded-lg">Home</Link>
                <a href="/#about" onClick={() => setIsOpen(false)} className="hover:text-primary-gold transition-colors text-text-dark font-medium px-4 py-2 hover:bg-black/5 rounded-lg">About</a>
                <a href="/#contact" onClick={() => setIsOpen(false)} className="hover:text-primary-gold transition-colors text-text-dark font-medium px-4 py-2 hover:bg-black/5 rounded-lg">Contact</a>
                <Link to="/services" onClick={() => setIsOpen(false)} className="bg-primary-teal text-white text-center w-full py-3 rounded-full text-sm font-medium hover:bg-primary-teal-hover transition-all mt-2 block">
                  Product & Services
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
