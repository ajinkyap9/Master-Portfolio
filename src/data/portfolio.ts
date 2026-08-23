import ibmLogo from '../assets/ibm.png';
import gfgLogo from '../assets/gfg.png';
import sentinelXImg from '../assets/sentinalX.png';
import cloudScaleImg from '../assets/cloud scale.png';
import mediconnectImg from '../assets/mediconnect.png';
import expenseTrackerImg from '../assets/expenceTracker.png';
import networkScannerImg from '../assets/networkScanner.jpg';

export const portfolioData = {
  name: "Ajinkya Pathak",
  title: "Full-stack Developer | ML Developer",
  bio: "Open-Source Contributor, Tech-Content Creator, Cybersecurity Enthusiast",
  email: "ajinkyapathak2005@gmail.com",
  phone: "+91 8208690147",
  location: "Pune, India",
  social: {
    github: "https://github.com/ajinkyap9",
    linkedin: "https://www.linkedin.com/in/ajinkya-pathak-820675326/",
    blog: "https://techverse224.wordpress.com/"
  }
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "GSAP"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL", "Firebase"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "AWS", "CI/CD", "Webpack", "Vite"]
  },
  {
    category: "Design",
    items: ["Figma", "UI/UX Design", "Responsive Design", "Animation", "Accessibility"]
  }
];

export const projects = [
  {
    id: 1,
    title: "SentinelX: Supervised Autonomous SOAR Engine",
    description: "Python SOAR with threat intel",
    tags: ["SOAR", "Python", "FastAPI", "SecOps"],
    image: sentinelXImg,
    link: "#",
    github: "https://github.com/ajinkyap9/SentinalX"
  },
  {
    id: 2,
    title: "CloudScale: AI-Driven Workload Orchestrator",
    description: "Autoscaling simulator for AI policies",
    tags: ["Cloud", "RL", "LLM", "Simulation"],
    image: cloudScaleImg,
    link: "#",
    github: "https://github.com/ajinkyap9/proxima-autoscaler"
  },
  {
    id: 3,
    title: "MediConnect: Clinical Care Coordination Platform",
    description: "JWT RBAC clinical API platform",
    tags: ["Healthcare", "RBAC", "MongoDB", "API"],
    image: mediconnectImg,
    link: "https://mediconnectpict.vercel.app/",
    github: "https://github.com/ajinkyap9/HealthCare"
  },
  {
    id: 4,
    title: "Expense Tracker",
    description: "Smart expense tracking dashboard",
    tags: ["Finance", "Dashboard", "Analytics", "Web"],
    image: expenseTrackerImg,
    link: "https://expensemanager-psi.vercel.app/",
    github: "https://github.com/ajinkyap9/expense-tracker"
  },
  {
    id: 5,
    title: "Network Data Monitoring System",
    description: "Real-time network anomaly monitoring",
    tags: ["Security", "Monitoring", "Network", "Analytics"],
    image: networkScannerImg,
    link: "#",
    github: "https://github.com/ajinkyap9/Network-Monitoring-System"
  }
];

export const certifications = [
  {
    title: "CyberSecurity Analyst",
    issuer: "IBM",
    focus: "Security Operations & Threat Detection",
    image: ibmLogo
  },
  {
    title: "Fullstack Developer",
    issuer: "IBM",
    focus: "Web Development & System Design",
    image: ibmLogo
  },
  {
    title: "JAVA - DSA",
    issuer: "GeeksForGeeks",
    focus: "Data Structures & Algorithms in Java",
    image: gfgLogo
  }
];

export const leadership = [
  {
    title: "Open Source Contributor",
    organization: " Apache / Processing Foundation etc",
    impact: "Contributed to 20+ open-source projects"
  },
  {
    title: "Technical Coordinator",
    organization: "PICT x Arbitrum",
    impact: "Coordinated Web3 workshop on Smart Contracts & Scaling"
  },
  {
    title: "College Portal Security Lead",
    organization: "PICT",
    impact: "Lead vulnerability management and Security Operations for college portal"
  }
];

export const experience = [
  {
    company: "PICT, Pune",
    position: "Cybersecurity Intern",
    duration: "Mar - Jun",
    description: "Built an AE+IF behavioral analytics engine to detect low-and-slow intrusions"
  }
];
