import './LegalPage.scss';

const TermsOfService = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Terms of Service</h1>

        <div className="pdf-container">
          <object
            data="/Terms of Service.pdf"
            type="application/pdf"
            width="100%"
            height="800px"
          >
            <p>
              Your browser does not support viewing PDFs. Please{' '}
              <a href="/Terms of Service.pdf" download>
                download the Terms of Service PDF
              </a>{' '}
              to view it.
            </p>
          </object>
        </div>

        <div className="download-section">
          <a href="/Terms of Service.pdf" download className="download-btn">
            Download Terms of Service (PDF)
          </a>
        </div>

        <div className="back-link">
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
