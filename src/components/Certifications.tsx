import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio';
import '../styles/Certifications.css';

export const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
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
    <section id="certifications" className="certifications">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Certifications</h2>
          <div className="header-line"></div>
        </motion.div>

        <motion.div
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${index}`}
              className="certification-card"
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >
              <div className="cert-image">
                {/* reserve small space for an image; add `cert.image` when available */}
                {cert.image ? <img src={cert.image} alt={cert.title} /> : null}
              </div>
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-focus">{cert.focus}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
