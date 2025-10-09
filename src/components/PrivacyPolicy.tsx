import './LegalPage.scss';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Privacy Policy</h1>

        <div className="pdf-container">
          <object
            data="/Privacy Policy.pdf"
            type="application/pdf"
            width="100%"
            height="800px"
          >
            <p>
              Your browser does not support viewing PDFs. Please{' '}
              <a href="/Privacy Policy.pdf" download>
                download the Privacy Policy PDF
              </a>{' '}
              to view it.
            </p>
          </object>
        </div>

        <div className="download-section">
          <a href="/Privacy Policy.pdf" download className="download-btn">
            Download Privacy Policy (PDF)
          </a>
        </div>

        <div className="back-link">
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
