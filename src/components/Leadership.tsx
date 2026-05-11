import { motion } from 'framer-motion';
import { leadership } from '../data/portfolio';
import '../styles/Leadership.css';

export const Leadership = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <section id="leadership" className="leadership">
      <span id="achievements" className="section-anchor" aria-hidden="true"></span>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Leadership & Achievements</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="leadership-carousel">
          <motion.div
            className="leadership-track"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[...leadership, ...leadership].map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                className="leadership-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ boxShadow: '0 12px 48px rgba(88, 224, 255, 0.3)' }}
              >
                <h3>{item.title}</h3>
                <p className="leadership-org">{item.organization}</p>
                <p className="leadership-impact">{item.impact}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
