import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CountUp from './CountUp';
import AmbientShapes from './AmbientShapes';
import ParallaxBackdrop from './ParallaxBackdrop';
import './Stats.scss';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const phoneStats: Stat[] = [
  { value: 65, suffix: '%', label: 'of inbound dealership calls reach a qualified staff member.' },
  { value: 30, suffix: '%', label: 'potential service-call leakage from missed, abandoned, or voicemail-routed calls.' },
  { value: 158, label: 'average missed service-appointment calls per month at studied rooftops.' },
];

const internetStats: Stat[] = [
  { value: 61, suffix: '%', label: 'responded within 15 minutes.' },
  { value: 19, suffix: '%', label: 'took more than one hour to respond.' },
  { value: 4, suffix: '%', label: 'did not respond at all.' },
  { value: 51, suffix: '%', label: 'provided a great response.' },
];

const punchlines = [
  <>Inbound demand already exists — but the path from inquiry to action is complex and inconsistent.</>,
  <>Missed or weak phone handling isn't just a sales issue; it directly impacts service, parts, and customer retention.</>,
  <>In equipment dealerships, <strong>one missed call</strong> can mean a lost repair order, parts sale, or machine-down customer.</>,
];

const groupContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const Stats = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation();
  const { ref: phoneRef, isInView: phoneInView } = useScrollAnimation();
  const { ref: internetRef, isInView: internetInView } = useScrollAnimation();
  const { ref: punchRef, isInView: punchInView } = useScrollAnimation();

  return (
    <section id="stats" className="stats">
      <ParallaxBackdrop image="/images/dealershipbg.png" tint="dark" />
      <AmbientShapes variant="dark" count={8} />

      <div className="stats-container">
        <motion.h2
          ref={titleRef}
          className="stats-title"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          Dealerships are <span className="highlight">leaking revenue</span> before the work even begins.
        </motion.h2>

        <motion.div
          ref={phoneRef}
          className="stats-group"
          variants={groupContainerVariants}
          initial="hidden"
          animate={phoneInView ? 'visible' : 'hidden'}
        >
          <motion.div className="stats-group-label" variants={statItemVariants}>
            Phone Metrics
          </motion.div>
          <div className="stats-grid stats-grid--three">
            {phoneStats.map((stat, idx) => (
              <motion.div key={idx} className="stat-item" variants={statItemVariants}>
                <div className="stat-number">
                  <CountUp end={stat.value} suffix={stat.suffix ?? ''} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={internetRef}
          className="stats-group"
          variants={groupContainerVariants}
          initial="hidden"
          animate={internetInView ? 'visible' : 'hidden'}
        >
          <motion.div className="stats-group-label" variants={statItemVariants}>
            Internet Lead Metrics
          </motion.div>
          <div className="stats-grid stats-grid--four">
            {internetStats.map((stat, idx) => (
              <motion.div key={idx} className="stat-item" variants={statItemVariants}>
                <div className="stat-number">
                  <CountUp end={stat.value} suffix={stat.suffix ?? ''} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={punchRef}
          className="stats-punchlines"
          variants={groupContainerVariants}
          initial="hidden"
          animate={punchInView ? 'visible' : 'hidden'}
        >
          {punchlines.map((line, idx) => (
            <motion.p key={idx} className="stats-punchline" variants={statItemVariants}>
              {line}
            </motion.p>
          ))}
        </motion.div>

        <p className="stats-sources">
          Sources: Car Wars 2025 dealership phone data · AutoSuccess 2025 · Marchex fixed-ops benchmarks · CallRevu fixed-ops data · Numa 2024 service department study · DAS Technology 2025 lead-response study (1,700 dealerships) · Pied Piper 2025 Internet Lead Effectiveness · Auto Remarketing 2025.
        </p>
      </div>
    </section>
  );
};

export default Stats;
