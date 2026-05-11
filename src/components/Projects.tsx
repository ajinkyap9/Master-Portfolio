import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import '../styles/Projects.css';

export const Projects = () => {
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
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Featured Projects</h2>
          <div className="header-line"></div>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="project-image-container">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="project-overlay"></div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-links">
                  <motion.a 
                    href={project.github}
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a 
                    href={![1, 2, 5].includes(project.id) ? project.link : "#"}
                    onClick={(e) => [1, 2, 5].includes(project.id) && e.preventDefault()}
                    className={`project-link ${[1, 2, 5].includes(project.id) ? 'disabled' : ''}`}
                    whileHover={![1, 2, 5].includes(project.id) ? { scale: 1.1 } : {}}
                    whileTap={![1, 2, 5].includes(project.id) ? { scale: 0.95 } : {}}
                  >
                    <FaExternalLinkAlt /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
