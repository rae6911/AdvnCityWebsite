import React from 'react';
import { motion } from 'framer-motion';

const WhoAreWe = () => {
  return (
    <section className="container-custom text-center py-24" id="about">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-primary-gold mb-10"
      >
        Who Are We?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto flex flex-col gap-6 text-sm md:text-base text-text-dark leading-relaxed"
      >
        <p>
          Advn City Corp is dedicated to building the foundation for tomorrow's smarter, more sustainable urban landscapes today. We specialize in deploying advanced urban technologies—such as intelligent CCTV security systems and efficient solar power installations—designed to integrate seamlessly into modern environments.
        </p>
        <p>
          By combining clean energy with smart infrastructure, we help forward-thinking organizations, local enterprises, and community developers transition into highly efficient, secure, and eco-friendly spaces. Our approach ensures that cutting-edge computer vision and smart monitoring work hand-in-hand with renewable energy to create resilient digital ecosystems.
        </p>
      </motion.div>
    </section>
  );
};
export default WhoAreWe;
