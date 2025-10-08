import './HowItWorks.scss';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-content">
          <h2 className="how-it-works-title">
            Service Departments are stretched <em>thin</em>. Opervia brings it all <span className="highlight">together.</span>
          </h2>

          <p className="how-it-works-description">
            Dealerships juggle quotes, work orders, customer calls,
            and marketing campaigns — often across disconnected
            systems. Opervia centralizes everything in one place,
            saving your team time while delivering a better customer
            experience.
          </p>

          <div className="features-list">
            <h3>Key Features:</h3>

            <div className="feature-item">
              <strong className="feature-title">AI-Powered Repair Quoter</strong>
              <span> – Accurate job times and estimated pricing.</span>
            </div>

            <div className="feature-item">
              <strong className="feature-title">Collaboration Hub</strong>
              <span> – Real-time team communication around work orders.</span>
            </div>

            <div className="feature-item">
              <strong className="feature-title">Customer Portal</strong>
              <span> – Self-service access for quotes, service history, and requests.</span>
            </div>

            <div className="feature-item">
              <strong className="feature-title">Remarketing Engine</strong>
              <span> – Target past customers with relevant offers.</span>
            </div>

            <div className="feature-item">
              <strong className="feature-title">Role-Based Access</strong>
              <span> – Profiles, permissions, and admin oversight across locations.</span>
            </div>

            <div className="feature-item">
              <strong className="feature-title">Data Control</strong>
              <span> – Show estimated prices without giving away margins.</span>
            </div>
          </div>
        </div>

        <div className="how-it-works-image">
          <img src="/images/computerscreen.png" alt="Opervia dashboard interface" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
