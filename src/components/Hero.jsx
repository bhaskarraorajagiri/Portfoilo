import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import HeroImg from '../assets/profilepic.jpg';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import linkedinDark from '../assets/linkedin-dark.svg';
import GithubLight from '../assets/github-light.svg';
import GithubDark from '../assets/github-dark.svg';
import InstagramDark from '../assets/instagram-dark.png';
import InstagramLight from '../assets/instagram-light.png';
import CV from '../assets/Bhaskar-Res.pdf';
import { useTheme } from './ThemeContext'; // Assuming ThemeContext is correctly set up
import style from './HeroStyle.module.css';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const GithubIcon = theme === 'light' ? GithubLight : GithubDark;
  const InstagramIcon = theme === 'light' ? InstagramLight : InstagramDark;

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay for children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id='home' className={style.container}>
      <motion.div
        className={style.colorModeContainer}
        variants={imageVariants} // Apply animation to the image container
        initial="hidden"
        animate="visible"
      >
        <img
          className={style.hero}
          src={HeroImg}
          alt="Profile" // Changed alt text for better accessibility
          // Fallback for image loading error
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://ui-avatars.com/api/?name=Bhaskar+Rao&size=300&background=${theme === 'light' ? 'e0e0e0' : '333333'}&color=${theme === 'light' ? '333333' : 'ffffff'}&bold=true`;
          }}
        />

        {/* Removed theme toggle button from here as it's typically in Navbar
            If you want it here, uncomment and style appropriately.
            <img className={style.colorMode} src={themeIcon} alt="color mode icon" onClick={toggleTheme} />
        */}
      </motion.div>

      <motion.div
        className={style.info}
        variants={containerVariants} // Apply container variant
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className={style.nameTitle}>
          Bhaskar Rao <br /> Rajagiri
        </motion.h1>
        <motion.h2 variants={itemVariants} className={style.positionTitle}>
          Computer Science Student (Cybersecurity)
        </motion.h2>

        <motion.span className={style.socialIcons} variants={itemVariants}>
          <motion.a
            href="https://www.linkedin.com/in/bhaskar-rao-rajagiri-143762314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank" // Added target="_blank"
            rel="noopener noreferrer" // Security best practice
            whileHover={{ scale: 1.1, rotate: 5 }} // Hover animation
            whileTap={{ scale: 0.9 }}
          >
            <img src={linkedinIcon} alt="LinkedIn Profile" />
          </motion.a>
          {/* Re-enabled Instagram for demonstration. If you want it, uncomment. */}
          {/* <motion.a
            href="https://www.instagram.com/mr._.bhaskar37"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={InstagramIcon} alt="Instagram Profile" />
          </motion.a> */}
          <motion.a
            href="https://github.com/bhaskarraorajagiri"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={GithubIcon} alt="GitHub Profile" />
          </motion.a>
        </motion.span>

        <motion.p className={style.description} variants={itemVariants}>
          Searching for a position in a multinational corporation that values continuous learning and skill
          enhancement. Aspire to upgrade my skill over time and play a pivotal role in taking the company to new heights.
        </motion.p>

        <motion.a href={CV} download variants={itemVariants}>
          <button className='hover'>Download CV</button> {/* Changed text for clarity */}
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;