import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Stats from './Stats';
import About from './About';
import HowItWorks from './HowItWorks';
import Departments from './Departments';
import Products from './Products';
import Backend from './Backend';
import Pricing from './Pricing';
import Contact from './Contact';
import SectionDivider from './SectionDivider';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId =
      location.state?.scrollTo ??
      (location.pathname === '/apply' ? 'contact' : null);

    if (sectionId) {
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
      <Stats />
      <SectionDivider type="wave" fromColor="#132f4c" toColor="#ffffff" />
      <About />
      <SectionDivider type="curve" fromColor="#ffffff" toColor="#1e3a5f" />
      <HowItWorks />
      <SectionDivider type="wave" fromColor="#1e3a5f" toColor="#f8fafc" />
      <Departments />
      <Products />
      <SectionDivider type="curve" fromColor="#f8fafc" toColor="#132f4c" />
      <Backend />
      <SectionDivider type="wave" fromColor="#132f4c" toColor="#f8fafc" />
      <Pricing />
      <SectionDivider type="curve" fromColor="#f8fafc" toColor="#1e3a5f" />
      <Contact />
    </>
  );
};

export default Home;
