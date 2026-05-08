import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CircuitPattern from './CircuitPattern';
import ParallaxBackdrop from './ParallaxBackdrop';
import './HowItWorks.scss';

const bullets = [
  { strong: 'Captures intent', rest: 'the moment the customer reaches out.' },
  { strong: 'Qualifies the need', rest: 'with dealership-specific logic.' },
  { strong: 'Structures the information', rest: 'before the handoff happens.' },
  { strong: 'Pushes a qualified opportunity', rest: 'into the correct workflow.' },
  { strong: 'Gives management visibility', rest: 'into response and routing.' },
];

const textVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const HowItWorks = () => {
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation();
  const { ref: footerRef, isInView: footerInView } = useScrollAnimation();

  return (
    <section id="how-it-works" className="how-it-works">
      <ParallaxBackdrop image="/images/dealershipbg.png" tint="dark" />
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
            From the moment a customer reaches out — until the work hits{' '}
            <span className="highlight">the right team.</span>
          </motion.h2>

          <motion.p className="how-it-works-description" variants={textItemVariants}>
            Opervia sits between the lead and the workflow, capturing intent across every channel and routing structured opportunity directly into your dealership.
          </motion.p>

          <motion.ul className="how-it-works-bullets" variants={textVariants}>
            {bullets.map((b) => (
              <motion.li key={b.strong} variants={textItemVariants}>
                <span className="bullet-marker" aria-hidden="true" />
                <span><strong>{b.strong}</strong> {b.rest}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          ref={imageRef}
          className="intake-flow"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={imageInView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.94 }
          }
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <img
            src="/images/workflow.png"
            alt="Opervia connects every customer touchpoint — phone, chat, mobile, email — to every dealership team: parts, service, sales, and support."
            loading="lazy"
          />
        </motion.div>
      </div>

      <motion.div
        ref={footerRef}
        className="how-it-works-footer"
        variants={textVariants}
        initial="hidden"
        animate={footerInView ? 'visible' : 'hidden'}
      >
        <motion.div className="how-it-works-platform" variants={textItemVariants}>
          <span className="platform-label">Always-on across the platform</span>
          <div className="platform-tags">
            <span>After-hours inquiry capture</span>
            <span>General dealership info</span>
            <span>Automatic customer routing</span>
          </div>
        </motion.div>

        <motion.p className="how-it-works-closer" variants={textItemVariants}>
          The best AI is the AI you <span className="highlight">don't know is there.</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
