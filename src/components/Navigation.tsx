import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';
import '../styles/Navigation.css';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="logo-mark">&lt;</span>
          <span className="logo-name">Ajinkya Pathak</span>
          <span className="logo-mark">/&gt;</span>
        </motion.div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <motion.button
            className="nav-link"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Home
          </motion.button>
          <motion.button
            className="nav-link"
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            About
          </motion.button>
          <motion.button
            className="nav-link"
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Projects
          </motion.button>

          <motion.button
            className="nav-link"
            onClick={() => scrollToSection('experience')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Experience
          </motion.button>

          <motion.button
            className="nav-link"
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Contact
          </motion.button>
        </div>

        <div className="nav-social">
          <motion.a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
            <FaGithub />
          </motion.a>
          <motion.a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
            <FaLinkedin />
          </motion.a>
          <motion.a href={portfolioData.social.blog} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
            <FaGlobe />
          </motion.a>
        </div>

        <motion.button 
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>
    </motion.nav>
  );
};
