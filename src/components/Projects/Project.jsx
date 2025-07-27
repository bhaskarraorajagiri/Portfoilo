import style from './Project.module.css';
import { motion } from 'framer-motion';
import BlackJack from '../../assets/blackjack-logo.png';
import Calculator from '../../assets/calculator.jpg';
import Extension from '../../assets/chrome-extension-logo.png';
import portfolio from '../../assets/portfolio-logo.png';
import steganogerphy from '../../assets/steganography-logo.png';
import univesity from '../../assets/university-management-system-logo.png';
import landingpage from '../../assets/landingpage-logo.png';
import Cards from './Cards';

function Project() {
  const projects = [
    {
      src: portfolio,
      link: 'https://github.com/bhaskarraorajagiri/Portfoilo',
      title: 'Personal Portfolio',
      disc: 'Web development showcase',
    },
    {
      src: BlackJack,
      link: 'https://github.com/bhaskarraorajagiri/Black-Jack-Game',
      title: 'BlackJack',
      disc: 'Playful, crisp, gaming.',
    },
    {
      src: steganogerphy,
      link: 'https://github.com/bhaskarraorajagiri/Stenography',
      title: 'Steganography',
      disc: 'Hidden, secure, digital insight.',
    },
    {
      src: univesity,
      link: 'https://github.com/bhaskarraorajagiri/University-Management-System',
      title: 'University Management System',
      disc: 'Academic, organized, efficient management.',
    },
    {
      src: landingpage,
      link: 'https://github.com/bhaskarraorajagiri/LandingPage',
      title: 'Landing Page',
      disc: 'Modern, vibrant, growth-oriented.',
    },
    {
      src: Calculator,
      link: 'https://github.com/bhaskarraorajagiri/CodSoft/tree/main/calculator',
      title: 'Calculator',
      disc: 'Precise, functional, utility tool.',
    },
    {
      src: Extension,
      link: 'https://github.com/bhaskarraorajagiri/Chrome-Extenstion',
      title: 'Chrome-Extension',
      disc: 'Functional, sleek, browser utility.',
    },
  ];

  return (
    <section id="projects" className={style.Container}>
      <motion.h1
        className={style.sectionTitle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      <motion.div
        className={style.ProjectContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {projects.map(({ src, link, title, disc }, idx) => (
          <motion.div
            className={style.cardWrapper}
            key={idx}
            whileHover={{ rotateY: 3, rotateX: 3, scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Cards src={src} link={link} title={title} disc={disc} />
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className={style.projectQuote}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        “Every project is a footprint in the journey of innovation.”
      </motion.p>
    </section>
  );
}

export default Project;
