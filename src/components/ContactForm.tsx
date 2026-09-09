import { useEffect, useRef, useState } from 'react';
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

// Cloudflare Turnstile site key (public). Set VITE_TURNSTILE_SITE_KEY in the
// Netlify production context. Without it no widget renders and no token is
// sent; the notifier skips its check while TURNSTILE_SECRET_KEY is unset too.
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;
const TURNSTILE_SCRIPT = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id: string) => void;
      remove: (id: string) => void;
    };
  }
}

const emptyForm = {
  name: '',
  dealershipName: '',
  locations: '',
  phone: '',
  email: '',
  message: '',
  website: '', // honeypot — hidden from real users, must stay empty
};

const ContactForm = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileId = useRef<string | null>(null);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    let widgetId: string | null = null;
    const render = () => {
      if (!turnstileRef.current || !window.turnstile) return;
      widgetId = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'light',
        appearance: 'interaction-only',
        callback: (token: string) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
      });
      turnstileId.current = widgetId;
    };
    const script =
      document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_SCRIPT}"]`) ??
      Object.assign(document.createElement('script'), { src: TURNSTILE_SCRIPT, async: true });
    if (!script.isConnected) document.head.appendChild(script);
    if (window.turnstile) render();
    else script.addEventListener('load', render);
    return () => {
      script.removeEventListener('load', render);
      if (widgetId) window.turnstile?.remove(widgetId);
    };
  }, []);

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
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(emptyForm);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Turnstile tokens are single-use; get a fresh one for the next attempt.
      if (turnstileId.current) window.turnstile?.reset(turnstileId.current);
      setTurnstileToken('');
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

        {/* Honeypot — hidden from people, tempting to bots. The server drops any submission that fills it. */}
        <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Turnstile mounts here; interaction-only appearance keeps it invisible unless a challenge is needed. */}
        {TURNSTILE_SITE_KEY && <div ref={turnstileRef} className="turnstile" />}

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
