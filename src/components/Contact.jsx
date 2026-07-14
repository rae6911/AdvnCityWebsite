import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../assets/Icon.png';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', project: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: '', email: '', project: '', message: '' });
    }
  };

  return (
    <section className="container-custom py-24 flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-20 overflow-hidden" id="contact">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 bg-[#f5f6f8] rounded-3xl p-10 flex flex-col justify-center"
      >
        <h4 className="text-primary-gold font-bold mb-2">Contact us</h4>
        <h2 className="text-4xl font-bold text-primary-teal mb-8">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="text" name="name" placeholder="Name" 
            value={formData.name} onChange={handleChange} required 
            className="w-full bg-[#e8e9eb] rounded-lg p-4 outline-none focus:ring-2 focus:ring-primary-gold transition-shadow text-text-dark text-sm placeholder-gray-500"
          />
          <input 
            type="email" name="email" placeholder="Email" 
            value={formData.email} onChange={handleChange} required 
            className="w-full bg-[#e8e9eb] rounded-lg p-4 outline-none focus:ring-2 focus:ring-primary-gold transition-shadow text-text-dark text-sm placeholder-gray-500"
          />
          <input 
            type="text" name="project" placeholder="Project" 
            value={formData.project} onChange={handleChange} 
            className="w-full bg-[#e8e9eb] rounded-lg p-4 outline-none focus:ring-2 focus:ring-primary-gold transition-shadow text-text-dark text-sm placeholder-gray-500"
          />
          <textarea 
            name="message" placeholder="Message" rows="5" 
            value={formData.message} onChange={handleChange} required
            className="w-full bg-[#e8e9eb] rounded-lg p-4 outline-none focus:ring-2 focus:ring-primary-gold transition-shadow text-text-dark text-sm placeholder-gray-500 resize-none"
          ></textarea>
          <button type="submit" className="self-center md:self-start mt-4 px-12 py-3 rounded-full border border-primary-gold text-primary-gold font-bold text-sm hover:bg-primary-gold hover:text-white hover:scale-105 hover:shadow-lg transition-all">
            {submitted ? 'Message Sent!' : 'Send Now'}
          </button>
        </form>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-12 items-start justify-items-center mt-8 md:mt-0"
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-28 md:h-28 lg:w-32 lg:h-32 flex justify-center items-center">
           <img src={Icon} alt="AdvnCity Icon" className="w-full h-full object-contain" />
        </div>
        
        <div className="flex flex-col items-center text-center gap-2">
          <i className='bx bx-phone text-5xl md:text-4xl lg:text-5xl text-primary-teal'></i>
          <h5 className="text-primary-gold font-bold text-sm md:text-xs lg:text-sm mt-1">Phone Number</h5>
          <p className="text-text-dark text-sm md:text-xs lg:text-sm font-medium leading-relaxed">
            0969 - 311 - 5281 (Smart)<br/>
            0927 - 813 - 8905 (Globe)
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center gap-2">
          <i className='bx bx-map text-5xl md:text-4xl lg:text-5xl text-primary-teal'></i>
          <h5 className="text-primary-gold font-bold text-sm md:text-xs lg:text-sm mt-1">Office Location</h5>
          <p className="text-text-dark text-sm md:text-xs lg:text-sm font-medium leading-relaxed">
            San Fernando,<br/>Victoria, Tarlac
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center gap-2">
          <i className='bx bx-envelope text-5xl md:text-4xl lg:text-5xl text-primary-teal'></i>
          <h5 className="text-primary-gold font-bold text-sm md:text-xs lg:text-sm mt-1">Email Address</h5>
          <p className="text-text-dark text-sm md:text-xs lg:text-sm font-medium leading-relaxed">
            advncity@gmail.com
          </p>
        </div>
      </motion.div>
    </section>
  );
};
export default Contact;
