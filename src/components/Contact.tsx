import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';
import '../styles/Contact.css';

export const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Let's Connect</h2>
          <div className="header-line"></div>
        </motion.div>

        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="contact-info">
            <h3>Let's Connect</h3>
            <p>Have a project in mind? Let's talk about it. I'm always interested in hearing about new projects and opportunities.</p>

            <div className="contact-details">
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>{portfolioData.phone}</p>
                </div>
              </motion.div>

              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>{portfolioData.email}</p>
                </div>
              </motion.div>

              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>{portfolioData.location}</p>
                </div>
              </motion.div>
            </div>

            <div className="social-links">
              <motion.a 
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
