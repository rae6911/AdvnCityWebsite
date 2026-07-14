import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Quote = () => {
  const carouselImages = [
    '/images/laptop_hands_grass.jpg',
    '/images/hero_solar_roof.jpg',
    '/images/hero_solar_close.jpg',
    '/images/hero_cctv_roof.jpg',
    '/images/hero_cctv_wall.jpg',
    '/images/hero_solar_tracker.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <section className="container-custom py-16 flex flex-col md:flex-row items-center gap-10 md:gap-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex-1 relative max-w-lg mx-auto"
      >
        <i className='bx bxs-quote-alt-left text-5xl text-text-dark mb-4 block'></i>
        <h3 className="text-2xl md:text-3xl font-bold italic text-primary-teal leading-snug mb-6">
          Technology only truly succeeds when it protects our communities and preserves our environment.
        </h3>
        <p className="text-sm text-text-muted font-medium ml-4">
          - Anonymous
        </p>
        <i className='bx bxs-quote-alt-right text-5xl text-text-dark absolute -bottom-6 right-0'></i>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 w-full max-w-lg mx-auto"
      >
        <div className="rounded-2xl overflow-hidden shadow-lg relative w-full h-[300px] md:h-[400px]">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={carouselImages[currentIndex]}
              alt={`Carousel image ${currentIndex + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};
export default Quote;
