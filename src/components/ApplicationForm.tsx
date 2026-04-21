import { useRef, useState } from 'react';
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

const ACCEPTED_RESUME_MIME = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);
const ACCEPTED_RESUME_EXT = /\.(pdf|doc|docx)$/i;
const MAX_RESUME_BYTES = 10 * 1024 * 1024;

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  motivation: '',
};

const ApplicationForm = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [resume, setResume] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setResumeError(null);

    if (!file) {
      setResume(null);
      return;
    }

    const hasValidType = ACCEPTED_RESUME_MIME.has(file.type) || ACCEPTED_RESUME_EXT.test(file.name);
    if (!hasValidType) {
      setResumeError('Resume must be a PDF, DOC, or DOCX file.');
      setResume(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    if (file.size > MAX_RESUME_BYTES) {
      setResumeError('Resume must be 10 MB or smaller.');
      setResume(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setResume(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resume) {
      setResumeError('Please attach your resume.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const webhookUrl = import.meta.env.VITE_APPLICATION_WEBHOOK_URL || 'https://notifications.opervia.com/v1/applications/webhook';

      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('linkedin', formData.linkedin);
      payload.append('github', formData.github);
      payload.append('motivation', formData.motivation);
      payload.append('resume', resume, resume.name);

      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: payload,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(emptyForm);
        setResume(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h2>Join the Team.</h2>
      <p className="contact-subtitle">
        Apply for an internship at <span className="brand">OPERVIA</span>.
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
            Thanks for applying! We'll review your application and get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="form-status error">
            Something went wrong. Please try again or email us directly.
          </div>
        )}

        <motion.div className="form-row" variants={formRowVariants}>
          <div className="form-group">
            <label htmlFor="application-name">Your Name:</label>
            <input
              type="text"
              id="application-name"
              name="name"
              placeholder="Johnny Codes"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </motion.div>

        <motion.div className="form-row" variants={formRowVariants}>
          <div className="form-group">
            <label htmlFor="application-email">Email:</label>
            <input
              type="email"
              id="application-email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="application-phone">Phone Number:</label>
            <input
              type="tel"
              id="application-phone"
              name="phone"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </motion.div>

        <motion.div className="form-row" variants={formRowVariants}>
          <div className="form-group">
            <label htmlFor="application-linkedin">
              LinkedIn <span className="label-hint">(optional)</span>
            </label>
            <input
              type="url"
              id="application-linkedin"
              name="linkedin"
              placeholder="https://linkedin.com/in/you"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="application-github">
              GitHub <span className="label-hint">(optional)</span>
            </label>
            <input
              type="url"
              id="application-github"
              name="github"
              placeholder="https://github.com/you"
              value={formData.github}
              onChange={handleChange}
            />
          </div>
        </motion.div>

        <motion.div className="form-row" variants={formRowVariants}>
          <div className="form-group">
            <label htmlFor="application-resume">Resume:</label>
            <div className={`file-upload ${resume ? 'has-file' : ''}`}>
              <input
                type="file"
                id="application-resume"
                name="resume"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                ref={fileInputRef}
                onChange={handleResumeChange}
                required
              />
              <label htmlFor="application-resume" className="file-upload-label">
                <span className="file-upload-cta">
                  {resume ? 'Change file' : 'Choose file'}
                </span>
                <span className="file-upload-name">
                  {resume ? resume.name : 'PDF, DOC, or DOCX — 10 MB max'}
                </span>
              </label>
            </div>
            {resumeError && <span className="field-error">{resumeError}</span>}
          </div>
        </motion.div>

        <motion.div className="form-row" variants={formRowVariants}>
          <div className="form-group">
            <label htmlFor="application-motivation">
              Why does an internship at Opervia interest you?
            </label>
            <textarea
              id="application-motivation"
              name="motivation"
              rows={6}
              placeholder="Tell us what draws you to Opervia and what you'd bring to the team..."
              value={formData.motivation}
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
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </motion.button>
      </motion.form>
    </>
  );
};

export default ApplicationForm;
