import { useState } from 'react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CircuitPattern from './CircuitPattern';
import './Pricing.scss';

const plans = [
  {
    name: 'Basic',
    price: 'FREE',
    features: [
      'Simple Service Form',
      'Simple Scheduling',
      'User/Location Profiles',
    ]
  },
  {
    name: 'Essential',
    monthlyPrice: '$299',
    annualPrice: '$240',
    features: [
      'Advanced Service Package Form',
      'Multi-Year Agreements',
      'Advanced Scheduling',
      'User/Location Profiles',
      'Expert Connect Integration',
      'Hauling Management',
      'Discount Management'
    ]
  },
  {
    name: 'Professional AI',
    monthlyPrice: '$599',
    annualPrice: '$479',
    popular: true,
    features: [
      'Advanced Service Package Form',
      'Multi-Year Agreements',
      'Advanced Scheduling',
      'User/Location Profiles',
      'Expert Connect Integration',
      'Hauling Management',
      'Discount Management',
      'AI Diagnostics, Quoting & Repair'
    ]
  },
  {
    name: 'Advanced AI',
    monthlyPrice: '$899',
    annualPrice: '$720',
    features: [
      'Advanced Service Package Form',
      'Multi-Year Agreements',
      'Advanced Scheduling',
      'User/Location Profiles',
      'Expert Connect Integration',
      'Hauling Management',
      'Discount Management',
      'AI Diagnostics, Quoting & Repair',
      'AI Voice Assistant',
      'AI-Enabled - Webchat'
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const Pricing = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation();
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="pricing">
      <CircuitPattern variant="light" />
      <motion.div
        ref={headerRef}
        className="pricing-header"
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      >
        <h2>Simple, Transparent Pricing</h2>
        <p>Start free. Scale as you grow. No hidden fees.</p>
      </motion.div>

      <div className="pricing-toggle" role="tablist" aria-label="Billing period">
        <button
          type="button"
          role="tab"
          aria-selected={!isAnnual}
          className={`pricing-toggle-option ${!isAnnual ? 'active' : ''}`}
          onClick={() => setIsAnnual(false)}
        >
          Monthly
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={isAnnual}
          className={`pricing-toggle-option ${isAnnual ? 'active' : ''}`}
          onClick={() => setIsAnnual(true)}
        >
          Annual <span className="save">SAVE 20%</span>
        </button>
      </div>

      <motion.div
        ref={cardsRef}
        className="pricing-container"
        variants={containerVariants}
        initial="hidden"
        animate={cardsInView ? 'visible' : 'hidden'}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`pricing-card ${plan.popular ? 'pricing-card--popular' : ''}`}
            variants={cardVariants}
          >
            {plan.popular && (
              <div className="popular-badge">Most Popular</div>
            )}

            <div className="card-header">
              <h3>{plan.name}</h3>
            </div>

            <div className="card-pricing">
              {plan.price ? (
                <div className="price-free">{plan.price}</div>
              ) : (
                <div className="price-option">
                  <div className="price-label">{isAnnual ? 'Annual' : 'Monthly'}</div>
                  <div className="price-amount">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</div>
                  <div className="price-period">per month/per location</div>
                </div>
              )}
            </div>

            <div className="card-features">
              <h4>Features</h4>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Pricing;
