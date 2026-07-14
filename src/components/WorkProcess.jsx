import React from 'react';
import { motion } from 'framer-motion';

const WorkProcess = () => {
  const processes = [
    { num: '01', title: 'Assess', desc: 'We evaluate your current infrastructure to identify opportunities for smart upgrades and clean energy.', icon: 'bx-analyse' },
    { num: '02', title: 'Design', desc: 'Our team designs tailored systems combining modern technologies and resilient architecture.', icon: 'bx-bulb' },
    { num: '03', title: 'Integrate', desc: 'We handle the deployment, ensuring seamless integration with your existing environment.', icon: 'bx-cog' },
    { num: '04', title: 'Optimize', desc: 'We continuously monitor and refine system performance to maximize efficiency and ROI.', icon: 'bx-like' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="container-custom text-center py-24">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-16 text-text-dark"
      >
        Our <span className="text-primary-gold">Work Process</span>
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-0 relative"
      >
        {processes.map((proc, idx) => (
          <React.Fragment key={proc.num}>
            <motion.div variants={itemVariants} className="flex flex-col items-center flex-1 max-w-[250px] relative z-10">
              <div className="w-20 h-20 bg-primary-teal rounded-full flex justify-center items-center relative mb-6 shadow-lg">
                <i className={`bx ${proc.icon} text-4xl text-white`}></i>
                <span className="absolute top-0 -right-2 bg-primary-gold text-white w-7 h-7 rounded-full text-xs font-bold flex justify-center items-center border-2 border-white">
                  {proc.num}
                </span>
              </div>
              <h4 className="text-lg font-bold text-primary-gold mb-3">{proc.title}</h4>
              <p className="text-xs text-text-muted leading-relaxed px-4">{proc.desc}</p>
            </motion.div>
            {idx < processes.length - 1 && (
              <motion.div variants={itemVariants} className="hidden md:block w-16 h-[2px] bg-gray-300 mt-10 shrink-0"></motion.div>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
};
export default WorkProcess;
