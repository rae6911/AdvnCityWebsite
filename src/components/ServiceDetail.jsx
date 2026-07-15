import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Overview from './Overview';

const serviceDetailsData = {
  'cctv-installation': {
    title: 'CCTV Installation',
    headline: 'Securing Your Space, Step-by-Step',
    process: [
      { step: 'Site Assessment & Consultation', desc: 'We begin by inspecting your premises to identify critical blind spots, assess lighting conditions, and determine the optimal camera placements for maximum coverage.' },
      { step: 'Custom System Design', desc: 'Our team designs a tailored surveillance architecture, selecting the right high-definition cameras (e.g., night vision, wide-angle) and storage solutions for your specific needs.' },
      { step: 'Professional Installation', desc: 'Our technicians carefully run cabling and install the hardware with minimal disruption to your daily operations, ensuring a clean and secure setup.' },
      { step: 'Configuration & Training', desc: 'We set up your viewing software on your devices, test all feeds for clarity, and walk you through how to monitor your system and retrieve footage.' }
    ]
  },
  'solar-installation': {
    title: 'Solar Installation',
    headline: 'Your Journey to Sustainable Energy',
    process: [
      { step: 'Energy Audit & Roof Inspection', desc: "We analyze your current energy consumption and inspect your roof's structural integrity, angle, and sun exposure to ensure viability." },
      { step: 'System Design & Permitting', desc: 'We engineer a custom solar array designed to maximize yield. We also handle all local municipal permitting and grid interconnection paperwork.' },
      { step: 'Expert Installation', desc: 'Our certified installers securely mount the racking, attach the solar panels, and wire the inverters safely to your electrical panel.' },
      { step: 'Activation & Maintenance', desc: 'After a final utility inspection, we flip the switch to activate your system. We also provide a monitoring app so you can track your real-time energy production.' }
    ]
  },
  'system-and-website-development': {
    title: 'System and Website Development',
    headline: 'Bringing Your Digital Vision to Life',
    process: [
      { step: 'Discovery & Strategy', desc: 'We collaborate with you to understand your business goals, target audience, and specific technical requirements to create a comprehensive project roadmap.' },
      { step: 'UI/UX Design & Prototyping', desc: 'Our designers craft intuitive user interfaces and interactive prototypes, giving you a clear visual representation of the final product before coding begins.' },
      { step: 'Agile Development', desc: 'Our engineers build your custom software or responsive website using modern, scalable frameworks, keeping you updated with regular milestones and testing phases.' },
      { step: 'Deployment & Support', desc: 'Once fully tested and approved, we launch your project to live servers. We also provide ongoing maintenance and support to ensure optimal performance.' }
    ]
  },
  'led-wall-installation': {
    title: 'LED Wall Installation',
    headline: 'Delivering Flawless Visual Experiences',
    process: [
      { step: 'Space Evaluation', desc: 'We visit your event space or corporate venue to measure dimensions, evaluate ambient lighting, and determine the necessary pixel pitch for optimal viewing distances.' },
      { step: 'Custom Display Engineering', desc: 'We design a modular LED configuration tailored to your space, ensuring structural stability and the correct aspect ratio for your content.' },
      { step: 'Seamless Assembly & Calibration', desc: 'Our team carefully rigs and assembles the LED cabinets, seamlessly aligning them. We then meticulously color-calibrate the entire wall for a uniform, vibrant picture.' },
      { step: 'Content Integration & Handover', desc: 'We connect your media players or content management systems, test the playback, and train your staff on how to manage and update the displays.' }
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetailsData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="container-custom py-32 text-center">
        <h2 className="text-3xl font-bold text-text-dark mb-4">Service Not Found</h2>
        <Link to="/services" className="text-primary-teal hover:text-primary-gold transition-colors underline">
          Return to All Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-bg-secondary min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-teal py-28 md:py-36 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="container-custom relative z-10">
          <Link to="/services" className="inline-flex items-center text-white/70 hover:text-primary-gold transition-colors font-medium mb-8 tracking-wide">
            <i className='bx bx-left-arrow-alt mr-2 text-xl'></i> Back to Services
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.15] max-w-4xl tracking-tight">
              {service.title} <span className="text-primary-gold opacity-90">Overview</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/80 font-medium max-w-3xl leading-relaxed">
              {service.headline}
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-20">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-text-dark inline-block relative tracking-tight"
            >
              Our Process
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-primary-gold rounded-full"></div>
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {service.process.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-white rounded-[2rem] p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border-color/40 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                {/* Large Background Number */}
                <div className="absolute -top-8 -right-4 text-[140px] font-black text-bg-secondary group-hover:text-primary-gold/5 transition-colors duration-500 select-none z-0 tracking-tighter leading-none">
                  0{index + 1}
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary-gold/10 text-primary-gold rounded-2xl flex items-center justify-center font-bold text-xl mb-8 group-hover:bg-primary-gold group-hover:text-white transition-all duration-300 shadow-sm">
                    {index + 1}
                  </div>
                  <h4 className="text-2xl font-bold text-text-dark mb-4 group-hover:text-primary-teal transition-colors duration-300">{item.step}</h4>
                  <p className="text-text-muted text-base leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <Overview serviceId={id} />
    </div>
  );
};

export default ServiceDetail;
