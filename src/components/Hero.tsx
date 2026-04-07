import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import './Hero.scss';

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <motion.div className="hero-background" style={{ y: backgroundY }}>
        <div className="gradient-overlay"></div>
      </motion.div>

      {/* Floating particles */}
      <div className="hero-particles" aria-hidden="true">
        <div className="particle particle--1" />
        <div className="particle particle--2" />
        <div className="particle particle--3" />
        <div className="particle particle--4" />
        <div className="particle particle--5" />
        <div className="particle particle--6" />
      </div>

      <motion.div
        className="hero-content"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <h1 className="hero-title">
          <motion.span
            className="hero-title-line"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            Smarter Service.
          </motion.span>
          <motion.span
            className="hero-title-line highlight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            Stronger Dealerships.
          </motion.span>
        </h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          AI-Powered Service Delivery
        </motion.p>
        <motion.button
          className="hero-btn"
          onClick={scrollToContact}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7, type: 'spring', stiffness: 200 }}
        >
          Get Demo
        </motion.button>
      </motion.div>

      {/* Angled divider */}
      <div className="hero-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 L0,60 Q720,120 1440,60 L1440,100 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
