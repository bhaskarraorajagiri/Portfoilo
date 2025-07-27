import React from 'react'
import HeroImg from "../assets/profilepic.jpg"
//C:\Users\Bhaskar\OneDrive\Desktop\CodSoft\portfolio\src\assets\profilepic.jpg
import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg"
import  linkedinLight from "../assets/linkedin-light.svg"
import  linkedinDark from "../assets/linkedin-dark.svg"
import  GithubLight from "../assets/github-light.svg"
import  GithubDark from "../assets/github-dark.svg"
import  InstagramDark from "../assets/instagram-dark.png"
import  InstagramLight from "../assets/instagram-light.png"
import CV from "../assets/Bhaskar-Res.pdf" 
import { useTheme } from './ThemeContext'
import style from './HeroStyle.module.css'
function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon ;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const GithubIcon = theme === 'light' ? GithubLight : GithubDark;
  const InstagramIcon = theme === 'light' ? InstagramLight : InstagramDark;
  return (
    <section id='hero' className={style.container}>
        <div className={style.colorModeContainer}>
            <img
              className={style.hero}
              src={HeroImg}
              alt="Profile-pic"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=Bhaskar+Rao&size=300&background=random"; }}
            />

            <img className={style.colorMode} src={themeIcon} alt="color mode icon" onClick={toggleTheme}/>
        </div>
        <div className={style.info}>
          <h1>Bhaskar Rao <br /> Rajagiri</h1>
          <h2>{`Computer Science Engineer (Cybersecurity)`}</h2>
          <span>
          <a href="https://www.linkedin.com/in/bhaskar-rao-rajagiri-143762314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img src={linkedinIcon} alt="Linkedin-Icon" />
          </a>
          {/* <a href="https://www.instagram.com/mr._.bhaskar37">
            <img src={InstagramIcon} alt="Instagram-Icon" />
          </a> */}
          <a href="https://github.com/bhaskarraorajagiri">
            <img src={GithubIcon} alt="Github-Icon" />
          </a>
         
          </span>
          <p className={style.description}>
              Searching for a position in a multinational corporation that values continuous learning and skill enhancement. Aspire to upgrade my skill over time and play a pivotal role in taking the company to new heights.
            </p>
          <a href={CV} download>
            <button className='hover'>Resume</button>
          </a>
        </div>
    </section>
  )
}

export default Hero