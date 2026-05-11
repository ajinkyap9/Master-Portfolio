import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import '../styles/Skills.css';

export const Skills = () => {
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

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Skills & Expertise</h2>
          <div className="header-line"></div>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              className="skill-category"
              variants={itemVariants}
            >
              <motion.h3 
                className="skill-category-title"
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {skillGroup.category}
              </motion.h3>
              
              <motion.div 
                className="skill-items"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    variants={skillItemVariants}
                    whileHover={{ 
                      scale: 1.08,
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="skill-dot"></span>
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
