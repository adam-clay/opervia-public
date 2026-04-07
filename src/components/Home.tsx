import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';
import Contact from './Contact';
import SectionDivider from './SectionDivider';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a scrollTo state from navigation
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      // Wait a bit for the page to render, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <SectionDivider type="curve" fromColor="#ffffff" toColor="#1e3a5f" />
      <HowItWorks />
      <SectionDivider type="wave" fromColor="#1e3a5f" toColor="#f8fafc" />
      <Pricing />
      <SectionDivider type="curve" fromColor="#f8fafc" toColor="#1e3a5f" />
      <Contact />
    </>
  );
};

export default Home;
