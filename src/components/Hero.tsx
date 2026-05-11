import { useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowDown,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import {
  SiDjango,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import { portfolioData } from '../data/portfolio';
import '../styles/Hero.css';

const techIconSet: { Icon: IconType; label: string }[] = [
  { Icon: FaReact, label: 'React' },
  { Icon: FaHtml5, label: 'HTML5' },
  { Icon: FaCss3Alt, label: 'CSS3' },
  { Icon: FaJs, label: 'JavaScript' },
  { Icon: SiTypescript, label: 'TypeScript' },
  { Icon: SiTailwindcss, label: 'Tailwind CSS' },
  { Icon: FaJava, label: 'Java' },
  { Icon: FaNodeJs, label: 'Node.js' },
  { Icon: SiExpress, label: 'Express' },
  { Icon: FaPython, label: 'Python' },
  { Icon: SiDjango, label: 'Django' },
  { Icon: SiMongodb, label: 'MongoDB' },
  { Icon: SiPostgresql, label: 'PostgreSQL' },
  { Icon: SiNextdotjs, label: 'Next.js' },
  { Icon: SiRedux, label: 'Redux' },
  { Icon: SiVite, label: 'Vite' },
  { Icon: SiFirebase, label: 'Firebase' },
  { Icon: FaDocker, label: 'Docker' },
  { Icon: FaGitAlt, label: 'Git' },
  { Icon: FaDatabase, label: 'Database' },
];

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  const heroRef = useRef<HTMLElement | null>(null);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const pointerRef = useRef({ x: 0, y: 0, isDown: false });
  const frameRef = useRef<number | null>(null);

  const floatingIcons = useMemo(
    () =>
      techIconSet.map((item, index) => {
        const size = 16 + Math.random() * 12;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const driftX1 = (Math.random() - 0.5) * 180;
        const driftY1 = (Math.random() - 0.5) * 180;
        const driftX2 = (Math.random() - 0.5) * 200;
        const driftY2 = (Math.random() - 0.5) * 200;
        const duration = 10 + Math.random() * 8;
        const delay = Math.random() * 2;
        const spin = (Math.random() - 0.5) * 120;

        return {
          ...item,
          id: `${item.label}-${index}`,
          size,
          left,
          top,
          driftX1,
          driftY1,
          driftX2,
          driftY2,
          duration,
          delay,
          spin,
        };
      }),
    [],
  );

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) {
      return;
    }

    const updateRepel = () => {
      frameRef.current = null;
      const { x, y, isDown } = pointerRef.current;
      const radius = 140;
      const strength = 28;

      iconRefs.current.forEach((icon) => {
        if (!icon) {
          return;
        }

        let repelX = 0;
        let repelY = 0;

        if (isDown) {
          const rect = icon.getBoundingClientRect();
          const dx = rect.left + rect.width / 2 - x;
          const dy = rect.top + rect.height / 2 - y;
          const distance = Math.hypot(dx, dy);

          if (distance < radius) {
            const force = (1 - distance / radius) * strength;
            const angle = Math.atan2(dy, dx);
            repelX = Math.cos(angle) * force;
            repelY = Math.sin(angle) * force;
          }
        }

        icon.style.setProperty('--repel-x', `${repelX.toFixed(2)}px`);
        icon.style.setProperty('--repel-y', `${repelY.toFixed(2)}px`);
      });
    };

    const scheduleUpdate = () => {
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(updateRepel);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current.x = event.clientX;
      pointerRef.current.y = event.clientY;
      scheduleUpdate();
    };

    const handlePointerDown = (event: PointerEvent) => {
      pointerRef.current.isDown = true;
      pointerRef.current.x = event.clientX;
      pointerRef.current.y = event.clientY;
      scheduleUpdate();
    };

    const handlePointerUp = () => {
      pointerRef.current.isDown = false;
      scheduleUpdate();
    };

    const handlePointerLeave = () => {
      pointerRef.current.isDown = false;
      scheduleUpdate();
    };

    heroElement.addEventListener('pointermove', handlePointerMove);
    heroElement.addEventListener('pointerdown', handlePointerDown);
    heroElement.addEventListener('pointerup', handlePointerUp);
    heroElement.addEventListener('pointerleave', handlePointerLeave);
    heroElement.addEventListener('pointercancel', handlePointerLeave);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      heroElement.removeEventListener('pointermove', handlePointerMove);
      heroElement.removeEventListener('pointerdown', handlePointerDown);
      heroElement.removeEventListener('pointerup', handlePointerUp);
      heroElement.removeEventListener('pointerleave', handlePointerLeave);
      heroElement.removeEventListener('pointercancel', handlePointerLeave);
    };
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="gradient-circle gradient-circle-1"></div>
        <div className="gradient-circle gradient-circle-2"></div>
        <div className="gradient-circle gradient-circle-3"></div>

        <div className="tech-field" aria-hidden="true">
          {floatingIcons.map((item, index) => (
            <motion.div
              key={item.id}
              className="tech-orb"
              style={{ left: `${item.left}%`, top: `${item.top}%` }}
              animate={{
                x: [0, item.driftX1, item.driftX2, 0],
                y: [0, item.driftY1, item.driftY2, 0],
                rotate: [0, item.spin, 0],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
                delay: item.delay,
              }}
            >
              <span
                className="tech-icon"
                style={{ fontSize: `${item.size}px` }}
                ref={(element) => {
                  iconRefs.current[index] = element;
                }}
                aria-hidden="true"
              >
                <item.Icon />
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-text">

          <motion.h1 
            variants={itemVariants}
            className="hero-title"
          >
            Hi, I'm <span className="highlight">{portfolioData.name}</span>
          </motion.h1>

          <motion.h2 
            variants={itemVariants}
            className="hero-subtitle"
          >
            {portfolioData.title}
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="hero-description"
          >
            {portfolioData.bio}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="hero-buttons"
          >
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
            Explore Projects
            </motion.button>
            <motion.button 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};
