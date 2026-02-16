import './LegalPage.scss';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Privacy Policy</h1>

        <div className="legal-content">
          <p className="effective-date">
            <strong>Effective Date:</strong> October 2025
          </p>

          <p className="intro-text">
            At Opervia, we respect your privacy and are committed to protecting the personal information
            you share with us. This Privacy Policy explains how we collect, use, and safeguard information
            when you use our website, software, and related services (collectively, the "Services").
          </p>

          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information when you interact with Opervia:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, job title, company name,
                and login credentials.
              </li>
              <li>
                <strong>Business Information:</strong> Dealership name, store locations, machine data, service history,
                and customer records uploaded into the system.
              </li>
              <li>
                <strong>Technical Information:</strong> Device type, browser, IP address, usage data, and cookies that
                help us improve the performance of the Services.
              </li>
              <li>
                <strong>Customer Data:</strong> Information about your end customers (such as machines owned,
                service requests, or contact details) if uploaded by you into the platform.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <p>Opervia uses collected information to:</p>
            <ul>
              <li>Provide and operate the Services.</li>
              <li>Personalize your experience and improve platform functionality.</li>
              <li>Process service requests, quotes, and dealership workflows.</li>
              <li>Send important updates, notices, or support messages.</li>
              <li>Analyze usage trends to improve performance and develop new features.</li>
              <li>Support remarketing and customer communication features, if enabled by your dealership.</li>
            </ul>
            <p className="highlight-text">We do <strong>not</strong> sell personal information to third parties.</p>
          </section>

          <section className="legal-section">
            <h2>3. Sharing of Information</h2>
            <p>We may share information only in the following circumstances:</p>
            <ul>
              <li>
                <strong>With Service Providers:</strong> Third-party vendors who assist with hosting, analytics,
                payment processing, and technical support.
              </li>
              <li>
                <strong>With Your Consent:</strong> When you direct us to share information with another system or
                integration partner.
              </li>
              <li>
                <strong>For Legal Compliance:</strong> If required by law, regulation, or legal process.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Data Security</h2>
            <p>
              We use industry-standard safeguards (encryption, access controls, secure hosting) to protect
              your information. While no system can be guaranteed 100% secure, Opervia takes reasonable
              measures to keep your data safe.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Data Retention</h2>
            <p>
              We retain information for as long as necessary to provide the Services, fulfill business purposes,
              or comply with legal obligations. You may request deletion of your data at any time (see Section
              7 below).
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Cookies & Tracking</h2>
            <p>Opervia may use cookies and similar technologies to:</p>
            <ul>
              <li>Maintain your login session.</li>
              <li>Track feature usage to improve performance.</li>
              <li>Provide analytics on how our Services are used.</li>
            </ul>
            <p>
              You may disable cookies through your browser, but some features of the Services may not
              function properly.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Your Rights</h2>
            <p>
              Depending on your jurisdiction (e.g., GDPR in the EU, CCPA in California), you may have the
              right to:
            </p>
            <ul>
              <li>Access the personal information we hold about you.</li>
              <li>Request corrections to inaccurate information.</li>
              <li>Request deletion of your information.</li>
              <li>Opt-out of certain communications or marketing.</li>
            </ul>
            <p>To exercise these rights, please contact us at: support@opervia.com.</p>
          </section>

          <section className="legal-section">
            <h2>8. Third-Party Links</h2>
            <p>
              Our Services may include links to third-party websites or integrations. Opervia is not responsible
              for the privacy practices of those third parties.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Children's Privacy</h2>
            <p>
              Opervia does not knowingly collect information from children under 13. If we learn that we have
              collected such data, we will delete it promptly.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. The revised version will be posted on our
              website with a new effective date.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Contact Us</h2>
            <p>For questions or concerns about this Privacy Policy, contact us at:</p>
            <div className="contact-info">
              <p><strong>Opervia</strong></p>
              <p>Email: support@opervia.com</p>
              {/* <p>Phone: (800) 555-1234</p> */}
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

export default PrivacyPolicy;
