import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    // If on home page, scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'solid' : 'transparent'}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <img
            src={isScrolled ? '/images/opervia-icon-notagline.png' : '/images/opervia-icon-notagline-white.png'}
            alt="Opervia"
          />
        </div>

        <ul className="navbar-menu">
          <li><button onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('how-it-works')}>How it Works</button></li>
          <li><button onClick={() => scrollToSection('pricing')}>Pricing</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>

        <div className="navbar-actions">
          <a href="https://app.opervia.com" className="btn-login">
            Log In
          </a>
          <button className="btn-demo" onClick={() => scrollToSection('contact')}>
            Get Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
