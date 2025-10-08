import './Hero.scss';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Smarter Service. <span className="highlight">Stronger Dealerships.</span>
        </h1>
        <p className="hero-subtitle">AI-Powered Service Delivery</p>
        <button className="hero-btn" onClick={scrollToContact}>
          Get Demo
        </button>
      </div>
    </section>
  );
};

export default Hero;
