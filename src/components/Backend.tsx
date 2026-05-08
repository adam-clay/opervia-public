import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CircuitPattern from './CircuitPattern';
import './Backend.scss';

const features = [
  'One-Click Parts Invoice Generation (IntelliDealer)',
  'One-Click Service Work Order Generation (IntelliDealer)',
  'AI Diagnostics & WO Segment Creation',
  'Workload Scheduling by Branch / Technician',
  'Service Workflow by Process Stage',
  'Service Approval Workflows',
  'Fully Customizable Customer Communication & Alerts',
  'Site Embed Codes / CSS Controls',
  'Parts OnSite Management System',
  'Used Equipment Evaluator',
];

const comingSoon = [
  'Call-Based Voice Agent',
  'Stripe Payments',
  'Social Media · Text · Email Marketing',
];

const integrations = ['IntelliDealer', 'Expert Connect'];

const featureContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const featureItemVariants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const Backend = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: featuresRef, isInView: featuresInView } = useScrollAnimation();
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation();
  const { ref: comingRef, isInView: comingInView } = useScrollAnimation();

  return (
    <section id="backend" className="backend">
      <CircuitPattern variant="dark" />

      <div className="backend-container">
        <motion.div
          ref={headerRef}
          className="backend-header"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <h2 className="backend-title">
            Built on a <span className="highlight">Robust Backend.</span>
          </h2>
          <p className="backend-subtitle">
            Everything your dealership needs to control the workflow and win more business. Never lose another opportunity again.
          </p>

          <div className="backend-integrations">
            <span className="backend-integrations-label">Native integrations</span>
            <div className="backend-integrations-list">
              {integrations.map((name) => (
                <span key={name} className="backend-integration-badge">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="backend-body">
          <motion.div
            ref={featuresRef}
            className="backend-features"
            variants={featureContainerVariants}
            initial="hidden"
            animate={featuresInView ? 'visible' : 'hidden'}
          >
            <ul>
              {features.map((feature) => (
                <motion.li key={feature} variants={featureItemVariants}>
                  <span className="backend-feature-marker" aria-hidden="true" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            ref={imageRef}
            className="backend-image"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={imageInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.92 }
            }
            transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            <img
              src="/images/laptop-diagnostics.png"
              alt="Opervia AI Diagnostic Quote — completed work-order quote with parts cost, time estimate, likely cause, and best-case outcome"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
          ref={comingRef}
          className="backend-coming"
          initial={{ opacity: 0, y: 20 }}
          animate={comingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <span className="backend-coming-label">Coming soon</span>
          <div className="backend-coming-list">
            {comingSoon.map((item) => (
              <span key={item} className="backend-coming-tag">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Backend;
