import './Pricing.scss';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'FREE',
      features: [
        'Simple Service Form',
        'Simple Scheduling',
        'User/Location Profiles',
        'Expert Connect Integration'
      ]
    },
    {
      name: 'Essential',
      monthlyPrice: '$299',
      annualPrice: '$2870',
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
      annualPrice: '$5750',
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
      annualPrice: '$8630',
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

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <div className="card-header">
              <h3>{plan.name}</h3>
            </div>

            <div className="card-pricing">
              {plan.price ? (
                <div className="price-free">{plan.price}</div>
              ) : (
                <>
                  <div className="price-option">
                    <div className="price-label">Monthly</div>
                    <div className="price-amount">{plan.monthlyPrice}</div>
                    <div className="price-period">per month/per location</div>
                  </div>

                  <div className="price-option">
                    <div className="price-label">
                      Annual <span className="save">(SAVE 20%)</span>
                    </div>
                    <div className="price-amount">{plan.annualPrice}</div>
                    <div className="price-period">per year/per location</div>
                  </div>
                </>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
