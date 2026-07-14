import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 'cctv-installation',
    title: 'CCTV Installation',
    description: 'Secure your premises with our state-of-the-art CCTV systems, offering high-definition surveillance and peace of mind.',
    icon: (
      <svg className="w-10 h-10 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'solar-installation',
    title: 'Solar Installation',
    description: 'Harness the power of the sun with our efficient and reliable solar panel installations for sustainable energy solutions.',
    icon: (
      <svg className="w-10 h-10 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 'system-and-website-development',
    title: 'System and Website Development',
    description: 'Transform your business with custom software systems and responsive, high-performing website development.',
    icon: (
      <svg className="w-10 h-10 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'led-wall-installation',
    title: 'Led Wall Installation',
    description: 'Captivate your audience with vibrant and seamless LED wall displays, perfect for events, advertising, and corporate spaces.',
    icon: (
      <svg className="w-10 h-10 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-bg-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-primary-teal relative inline-block"
          >
            OUR SERVICES
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-primary-gold rounded-full"></div>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-muted text-base md:text-lg mt-6"
          >
            We provide cutting-edge solutions tailored to meet your technological and infrastructural needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <Link to={`/services/${service.id}`} key={index} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full group bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 border border-border-color/50 relative overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gold/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                
                <div className="mb-6 relative z-10">
                  <div className="w-16 h-16 bg-primary-gold/10 rounded-xl flex items-center justify-center group-hover:bg-primary-gold/20 transition-colors">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-primary-teal group-hover:text-primary-gold transition-colors relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-text-muted text-sm leading-relaxed relative z-10">
                  {service.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
