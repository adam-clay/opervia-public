import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionDivider from './SectionDivider';
import './AwardPage.scss';

const FACEBOOK_POST_URL = 'https://www.facebook.com/share/19JKFAfknR/?mibextid=wwXIfr';
const LINKEDIN_POST_URL =
  'https://www.linkedin.com/posts/farm-equipment-magazine_dmsummit-activity-7490952445284495360-ltAF?utm_source=share&utm_medium=member_ios&rcm=ACoAAAeSVgcB1pegyVdEU8TAzxHR8MXIBfmLN9M';

const heroContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const AwardPage = () => {
  const { ref: socialRef, isInView: socialInView } = useScrollAnimation();

  return (
    <div className="award-page">
      <section className="award-hero">
        <div className="award-hero-glow" aria-hidden="true" />
        <motion.div
          className="award-hero-content"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="award-eyebrow" variants={heroItemVariants}>
            Opervia News
          </motion.p>
          <motion.img
            className="award-badge"
            variants={heroItemVariants}
            src="/images/dms-award.png"
            alt="Farm Equipment Dealership Minds Summit 2026 — 2026 Award Winner, Dealership Shark Tank Session"
          />
          <motion.h1 className="award-title" variants={heroItemVariants}>
            Opervia Wins Dealership Shark Tank at the 2026 Dealership Minds Summit
          </motion.h1>
          <motion.p className="award-deck" variants={heroItemVariants}>
            Equipment dealers vote Opervia the solution they would be most likely to
            invest in for their business.
          </motion.p>
        </motion.div>
      </section>

      <SectionDivider type="wave" fromColor="#132f4c" toColor="#ffffff" />

      <section className="award-article">
        <div className="award-article-container">
          <p className="award-lede">
            Opervia was named the winner of the inaugural Dealership Shark Tank at the
            2026 Dealership Minds Summit, an annual gathering of equipment dealership
            owners, executives and industry leaders hosted by Farm Equipment.
          </p>
          <p>
            During the session, Opervia Co-Founder Mark Reid presented the company&rsquo;s
            vision for helping equipment dealerships better manage and act on customer
            opportunities across the organization.
          </p>
          <p>
            Opervia brings customer interactions from phone calls, web forms, text
            messages, email and other channels into a centralized platform, then uses
            AI, dealership data and business processes to help employees respond with
            greater speed, consistency and knowledge. The goal is simple: help
            dealerships deliver a better customer experience while making sure valuable
            opportunities don&rsquo;t get missed, lost or forgotten.
          </p>
          <p>
            Following the presentation, Reid fielded questions from a panel of industry
            &ldquo;sharks.&rdquo; The dealership audience was then asked to vote for the
            solution they would be most likely to invest in for their own business
            &mdash; with Opervia receiving the top vote.
          </p>
          <p>
            For an early-stage company built specifically around the challenges facing
            equipment dealerships, the recognition represents an important validation
            of Opervia&rsquo;s direction.
          </p>

          <blockquote className="award-quote">
            <p>
              &ldquo;We built Opervia around problems we experience inside dealerships
              every day. Having a room full of dealership leaders see the same
              opportunity &mdash; and select Opervia as the solution they would be most
              likely to invest in &mdash; is incredibly meaningful for our team.&rdquo;
            </p>
            <cite>Mark Reid &middot; Co-Founder, Opervia</cite>
          </blockquote>

          <p>
            The Dealership Shark Tank win marks another step forward for Opervia as it
            continues developing a new approach to dealership customer intake, employee
            enablement and AI-powered workflow automation.
          </p>

          <motion.div
            ref={socialRef}
            className="award-social"
            initial={{ opacity: 0, y: 30 }}
            animate={socialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            <h2>See the announcement</h2>
            <p>Farm Equipment shared the news &mdash; join the conversation.</p>
            <div className="award-social-links">
              <a
                href={FACEBOOK_POST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="award-social-link facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                View on Facebook
              </a>
              <a
                href={LINKEDIN_POST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="award-social-link linkedin"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                View on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider type="curve" fromColor="#ffffff" toColor="#1e3a5f" />

      <section className="award-cta">
        <h2>See what dealership leaders voted for.</h2>
        <p>Get a firsthand look at the platform that won the room.</p>
        <Link to="/" state={{ scrollTo: 'contact' }} className="award-cta-btn">
          Get Demo
        </Link>
      </section>
    </div>
  );
};

export default AwardPage;
