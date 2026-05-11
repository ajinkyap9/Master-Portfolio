import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import '../styles/About.css';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>About Me</h2>
          <div className="header-line"></div>
        </motion.div>

        <motion.div 
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="about-text">
            <h3>Information Technology Undergraduate & Software Engineer</h3>
            <p>
              I am an Information Technology undergraduate at PICT, focused on building scalable software systems with an emphasis on backend automation and intelligent workflows. My interests lie in software development and Agentic AI, where I explore systems capable of autonomous decision-making and real-time problem-solving.
            </p>
            <p>
              I approach engineering with an end-to-end ownership mindset, ensuring that systems are designed for performance, scalability, and real-world impact. With a strong focus on backend architecture, I work on developing automation-driven solutions that integrate reasoning capabilities while maintaining reliability and efficiency. I also prioritize a security-first approach by embedding threat-aware design principles into modern applications.
            </p>
            <p>
              Beyond development, I share insights on cybersecurity, blockchain, and emerging technologies through my platform, TechVerse, translating complex concepts into practical knowledge. I am motivated to contribute to impactful systems and collaborate in environments that value strong engineering fundamentals and long-term product thinking.
            </p>
            {/* stats removed per request */}
          </motion.div>

          <motion.div variants={itemVariants} className="experience-timeline" id="experience">
            <h3>Experience</h3>
            <div className="experience-items">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="experience-item"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.45 }}
                  viewport={{ once: true }}
                >
                  <div className="experience-marker"></div>
                  <div className="experience-content">
                    <h4>{exp.position}</h4>
                    <p className="company">{exp.company}</p>
                    <p className="duration">{exp.duration}</p>
                    <p className="description">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="experience-links">
              <hr />
              <div className="links">
                <a href="#achievements" className="link-btn">Achievements</a>
                <a href="#leadership" className="link-btn">Leadership</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
