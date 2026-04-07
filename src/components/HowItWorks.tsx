import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CircuitPattern from './CircuitPattern';
import './HowItWorks.scss';

const features = [
  { title: 'AI-Powered Repair Quoter', desc: 'Accurate job times and estimated pricing.' },
  { title: 'Collaboration Hub', desc: 'Real-time team communication around work orders.' },
  { title: 'Customer Portal', desc: 'Self-service access for quotes, service history, and requests.' },
  { title: 'Remarketing Engine', desc: 'Target past customers with relevant offers.' },
  { title: 'Role-Based Access', desc: 'Profiles, permissions, and admin oversight across locations.' },
  { title: 'Data Control', desc: 'Show estimated prices without giving away margins.' },
];

const textVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const featureContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const featureItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const HowItWorks = () => {
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation();

  return (
    <section id="how-it-works" className="how-it-works">
      <CircuitPattern variant="dark" />
      <div className="how-it-works-container">
        <motion.div
          ref={contentRef}
          className="how-it-works-content"
          variants={textVariants}
          initial="hidden"
          animate={contentInView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="how-it-works-title" variants={textItemVariants}>
            Service Departments are stretched <em>thin</em>. Opervia brings it all{' '}
            <span className="highlight">together.</span>
          </motion.h2>

          <motion.p className="how-it-works-description" variants={textItemVariants}>
            Dealerships juggle quotes, work orders, customer calls,
            and marketing campaigns — often across disconnected
            systems. Opervia centralizes everything in one place,
            saving your team time while delivering a better customer
            experience.
          </motion.p>

          <motion.div
            className="features-list"
            variants={featureContainerVariants}
          >
            <motion.h3 variants={textItemVariants}>Key Features:</motion.h3>

            {features.map((feature, index) => (
              <motion.div key={index} className="feature-item" variants={featureItemVariants}>
                <span className="feature-number">{index + 1}</span>
                <div className="feature-text">
                  <strong className="feature-title">{feature.title}</strong>
                  <span className="feature-desc"> — {feature.desc}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          ref={imageRef}
          className="how-it-works-image"
          initial={{ opacity: 0, scale: 0.85, y: 60 }}
          animate={imageInView
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.85, y: 60 }
          }
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <img src="/images/computerscreen.png" alt="Opervia dashboard interface" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
