import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import main_view from '../assets/main_view.jpg';


const Hero = () => {
  const images = [
    main_view,
    '/images/hero_solar_close.jpg',
    '/images/hero_cctv_roof.jpg',
    '/images/hero_cctv_wall.jpg',
    '/images/hero_solar_tracker.jpg'
  ];
  const [activeImage, setActiveImage] = useState(images[0]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section
      className="container-custom text-center pt-20 pb-16" id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-primary-teal mb-4 leading-tight">
          Building the foundation for<br />tommorow's smarter
        </motion.h1>
        <motion.p variants={itemVariants} className="text-sm md:text-base text-text-dark mb-10 max-w-xl">
          Install smart security and clean energy to<br />watch your community thrive.
        </motion.p>
        <motion.div variants={itemVariants} className="flex gap-4 justify-center mb-16">
          <Link to="/services" className="bg-primary-teal text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-teal-hover hover:scale-105 hover:shadow-lg transition-all">
            Explore Services
          </Link>
        </motion.div>
      </div>
      <motion.div variants={itemVariants} className="grid gap-4 max-w-5xl mx-auto px-4 mt-12">
        <div className="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
          <img src={activeImage} alt="Featured" className="w-full h-full object-cover transition-all duration-700" />
        </div>
        <div className="grid grid-cols-5 gap-2 md:gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden shadow-md cursor-pointer aspect-square md:aspect-auto md:h-32 transition-all duration-300 ${activeImage === img ? 'ring-4 ring-primary-teal scale-105' : 'hover:scale-105 opacity-80 hover:opacity-100'}`}
              onClick={() => setActiveImage(img)}
            >
              <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};
export default Hero;
