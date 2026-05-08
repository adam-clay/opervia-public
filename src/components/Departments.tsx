import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Departments.scss';

interface Department {
  name: string;
  icon: string;
  capabilities: string[];
}

const departments: Department[] = [
  {
    name: 'Service',
    icon: '/images/serviceicon.png',
    capabilities: [
      'Appointment Requests',
      'Service Packages',
      'AI-Powered Diagnosis',
      'Estimate Building',
      'Work Order Generation',
      'Repair Status',
      'Workload Assignment',
      'Capacity Monitoring',
      'Precision AG Support',
    ],
  },
  {
    name: 'Parts',
    icon: '/images/partsicon.png',
    capabilities: [
      'Parts Identification',
      'Inventory & Availability',
      'Order Intent',
      'Pickup Routing',
      'Pricing',
      'Discounts',
    ],
  },
  {
    name: 'Sales',
    icon: '/images/saleicon.png',
    capabilities: [
      'Wholegoods Interest',
      'Model Qualification',
      'In-Stock Inventory',
      'Trade & Finance',
      'Price Bargaining',
      'Appointment Handoff',
      'Used Equipment Valuations',
    ],
  },
];

const gridContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const columnVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const Departments = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation();
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation();
  const { ref: quoteRef, isInView: quoteInView } = useScrollAnimation();

  return (
    <section id="departments" className="departments">
      <div className="departments-container">
        <motion.h2
          ref={titleRef}
          className="departments-title"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          Built for the realities of modern{' '}
          <span className="highlight">Equipment Dealerships.</span>
        </motion.h2>

        <motion.p
          className="departments-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          Three customer-facing departments. One AI-powered intake layer that captures every conversation with the right context.
        </motion.p>

        <motion.div
          ref={gridRef}
          className="departments-grid"
          variants={gridContainerVariants}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
        >
          {departments.map((dept) => (
            <motion.div key={dept.name} className="department-card" variants={columnVariants}>
              <div className="department-header">
                <img src={dept.icon} alt="" className="department-icon" aria-hidden="true" />
                <h3 className="department-name">{dept.name}</h3>
              </div>
              <div className="department-divider" />
              <ul className="department-capabilities">
                {dept.capabilities.map((cap) => (
                  <li key={cap}>{cap}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.blockquote
          ref={quoteRef}
          className="departments-quote"
          initial={{ opacity: 0, y: 30 }}
          animate={quoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          The issue is not simply whether someone answered the phone. The issue is whether the dealership{' '}
          <span className="highlight">captured the opportunity correctly.</span>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default Departments;
