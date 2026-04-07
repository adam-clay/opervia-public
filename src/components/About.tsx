import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.scss';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const About = () => {
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation();
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          ref={imageRef}
          className="about-image"
          initial={{ opacity: 0, x: -60 }}
          animate={imageInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: -60 }
          }
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <img src="/images/jdservice.jpeg" alt="Service technician working" loading="lazy" />
        </motion.div>

        <motion.div
          ref={contentRef}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={contentInView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="about-title" variants={itemVariants}>
            Everything Your Dealership Service Department Needs — In{' '}
            <span className="highlight">One Platform.</span>
          </motion.h2>

          <motion.div className="about-accent-line" variants={itemVariants} />

          <motion.p className="about-description" variants={itemVariants}>
            <strong>OPERVIA</strong> is an all-in-one software platform built for
            equipment dealerships to streamline service quoting, team
            collaboration, customer engagement, and marketing. By
            centralizing operations into one easy-to-use system and
            leveraging the power and automation of AI, it helps
            dealerships save time, reduce costs, and strengthen
            customer relationships.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
