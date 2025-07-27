import React from "react";
import "./AboutMe.css";
import { motion } from "framer-motion";
import profile from "../assets/profilepic.jpg";

const AboutMe = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="about-title">ABOUT ME</h2>

      <div className="about-content">
        <motion.img
          src={profile}
          alt="Profile"
          className="profile-pic"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />

        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="about-intro">
            Hey there <span className="emoji">👋</span>
            <br />
            I’m <span className="highlight">Bhaskar&nbsp;Rao&nbsp;Rajagiri</span>, a Computer Science student
            specializing in <span className="highlight">Cybersecurity</span> at{" "}
            <span className="highlight">Raghu&nbsp;Institute&nbsp;of&nbsp;Technology</span>.
          </p>


          <p>
            I’m currently pursuing my B.Tech, set to graduate in 2026. I'm passionate about building secure, scalable systems and learning cutting-edge technology.
          </p>

          <ul className="about-list">
            <li>⚡ Backend Development with Node.js & MongoDB</li>
            <li>🔐 Cybersecurity & Ethical Hacking enthusiast</li>
            <li>🧠 Tech explorer & problem solver</li>
            <li>🤝 Open to internships and collaborations</li>
          </ul>

          <motion.p
            className="quote"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <em>“Building secure tech, one byte at a time.”</em> 🧠
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
