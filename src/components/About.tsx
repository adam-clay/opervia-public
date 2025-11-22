import './About.scss';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/jdservice.jpeg" alt="Service technician working" />
        </div>

        <div className="about-content">
          <h2 className="about-title">
            EVERYTHING YOUR DEALERSHIP SERVICE DEPARTMENT NEEDS - IN <span className="highlight">ONE PLATFORM.</span>
          </h2>

          <p className="about-description">
            <strong>OPERVIA</strong> is an all-in-one software platform built for
            equipment dealerships to streamline service quoting, team
            collaboration, customer engagement, and marketing. By
            centralizing operations into one easy-to-use system and
            leveraging the power and automation of AI, it helps
            dealerships save time, reduce costs, and strengthen
            customer relationships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
