import './LegalPage.scss';

const TermsOfService = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Terms of Service</h1>

        <div className="legal-content">
          <p className="effective-date">
            <strong>Effective Date:</strong> October 2025
          </p>

          <p className="intro-text">
            These Terms of Service ("Terms") govern your use of Opervia's website, software, and related
            services (the "Services"). By accessing or using the Services, you agree to these Terms. If you
            do not agree, you may not use Opervia.
          </p>

          <section className="legal-section">
            <h2>1. Eligibility</h2>
            <p>
              You must be at least 18 years old and authorized to act on behalf of your business to use
              Opervia.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Account Registration</h2>
            <ul>
              <li>You must provide accurate and complete information when creating an Opervia account.</li>
              <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
              <li>You are responsible for all activity under your account, whether authorized or not.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Use of Services</h2>
            <p>
              You agree to use Opervia only for lawful business purposes and in accordance with these
              Terms. You may not:
            </p>
            <ul>
              <li>Copy, modify, or distribute Opervia without authorization.</li>
              <li>Reverse engineer, decompile, or attempt to access the source code.</li>
              <li>Use the Services to store or transmit unlawful, harmful, or fraudulent data.</li>
              <li>Interfere with or disrupt the security or performance of the Services.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Customer Data</h2>
            <ul>
              <li>You retain all rights to customer and machine data you upload into Opervia.</li>
              <li>You grant Opervia a limited license to use that data solely for providing the Services.</li>
              <li>You are responsible for ensuring you have the right to upload and use any customer data in the platform.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Subscription & Payment</h2>
            <ul>
              <li>Use of Opervia may require a paid subscription. Subscription terms, pricing, and billing will be detailed in your service agreement.</li>
              <li>Fees are non-refundable unless otherwise required by law or specified in writing.</li>
              <li>Opervia may suspend or terminate accounts for non-payment.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Intellectual Property</h2>
            <ul>
              <li>Opervia and all related trademarks, logos, and software are owned by Opervia and protected by copyright and intellectual property laws.</li>
              <li>These Terms do not grant you ownership of Opervia's intellectual property.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Service Availability</h2>
            <ul>
              <li>Opervia strives for 24/7 uptime but does not guarantee uninterrupted access.</li>
              <li>Maintenance, updates, or unforeseen outages may cause temporary downtime.</li>
              <li>Opervia is not liable for losses arising from downtime.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Data Security & Privacy</h2>
            <p>
              Your use of Opervia is also governed by our{' '}
              <a href="/privacy-policy" className="inline-link">Privacy Policy</a>, which explains how we collect,
              use, and protect your information.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Termination</h2>
            <p>
              Opervia may suspend or terminate your access if you violate these Terms, fail to pay fees, or
              misuse the Services. You may terminate your account at any time by contacting us.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Disclaimer of Warranties</h2>
            <p>
              Opervia is provided "as is" and "as available." We disclaim all warranties, express or implied,
              including but not limited to warranties of merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul>
              <li>Opervia shall not be liable for indirect, incidental, or consequential damages.</li>
              <li>Opervia's total liability shall not exceed the amount paid by you to Opervia in the past 12 months.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Opervia from claims, damages, or expenses arising
              from your misuse of the Services, violation of these Terms, or infringement of third-party rights.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. Changes to Terms</h2>
            <p>
              Opervia may update these Terms from time to time. Updated Terms will be posted with a new
              effective date. Continued use of the Services means you accept the updated Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>14. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the state of [Insert State], without regard to conflict of
              law principles.
            </p>
          </section>

          <section className="legal-section">
            <h2>15. Contact Us</h2>
            <p>For questions regarding these Terms, please contact us at:</p>
            <div className="contact-info">
              <p><strong>Opervia</strong></p>
              <p>Email: support@opervia.com</p>
              <p>Phone: (800) 555-1234</p>
              {/* <p>Address: [Insert Company Address]</p> */}
            </div>
          </section>
        </div>

        <div className="back-link">
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
