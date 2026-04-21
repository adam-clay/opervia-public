import { useState } from 'react';
import { motion } from 'motion/react';

const formRowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const formContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dealershipName: '',
    locations: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const webhookUrl = import.meta.env.VITE_CONTACT_WEBHOOK_URL || 'https://notifications.opervia.com/v1/contact/webhook';

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          dealershipName: '',
          locations: '',
          phone: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h2>Get in Touch.</h2>
      <p className="contact-subtitle">
        Interested in what <span className="brand">OPERVIA</span> can do for you?
      </p>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        variants={formContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {submitStatus === 'success' && (
          <div className="form-status success">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="form-status error">
            Something went wrong. Please try again or contact us directly.
          </div>
        )}

        <motion.div className="form-row" variants={formRowVariants}>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </motion.div>

        <motion.div className="form-row" variants={formRowVariants}>
          <div className="form-group">
            <label htmlFor="dealershipName">Dealership Name:</label>
            <input
              type="text"
              id="dealershipName"
              name="dealershipName"
              placeholder="ABC Equipment Co."
              value={formData.dealershipName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="locations">Locations:</label>
            <select
              id="locations"
              name="locations"
              value={formData.locations}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="1">1</option>
              <option value="2-5">2-5</option>
              <option value="6-10">6-10</option>
              <option value="11+">11+</option>
            </select>
          </div>
        </motion.div>

        <motion.div className="form-row" variants={formRowVariants}>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </motion.div>

        <motion.div className="form-row" variants={formRowVariants}>
          <div className="form-group">
            <label htmlFor="message">How can we help?</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your service department needs..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </motion.div>

        <motion.button
          type="submit"
          className="submit-btn"
          disabled={isSubmitting}
          variants={formRowVariants}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </motion.button>
      </motion.form>
    </>
  );
};

export default ContactForm;
