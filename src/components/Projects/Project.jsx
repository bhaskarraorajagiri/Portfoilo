import style from './Project.module.css';
import BlackJack from '../../assets/blackjack-logo.png';
import Calculator from '../../assets/calculator.jpg';
import Extension from '../../assets/chrome-extension-logo.png';
import portfolio from '../../assets/portfolio-logo.png';
import steganogerphy from '../../assets/steganography-logo.png';
import univesity from '../../assets/university-management-system-logo.png';
import landingpage from '../../assets/landingpage-logo.png';
import Cards from './Cards';

function Project() {
  return (
    <section id='projects' className={style.Container}>
      <h1 className={style.sectionTitle}>Projects</h1>
      <div className={style.ProjectContainer}>
        <div className={style.cardWrapper}>
          <Cards
            src={portfolio}
            link="https://github.com/bhaskarraorajagiri/Portfoilo"
            title="Personal Portfolio"
            disc="Web development showcase"
          />
        </div>
        <div className={style.cardWrapper}>
          <Cards
            src={BlackJack}
            link="https://github.com/bhaskarraorajagiri/Black-Jack-Game"
            title="BlackJack"
            disc="Playful, crisp, gaming."
          />
        </div>
        <div className={style.cardWrapper}>
          <Cards
            src={steganogerphy}
            link="https://github.com/bhaskarraorajagiri/Stenography"
            title="Steganography"
            disc="Hidden, secure, digital insight."
          />
        </div>
        <div className={style.cardWrapper}>
          <Cards
            src={univesity}
            link="https://github.com/bhaskarraorajagiri/University-Management-System"
            title="University Management System"
            disc="Academic, organized, efficient management."
          />
        </div>
        <div className={style.cardWrapper}>
          <Cards
            src={landingpage}
            link="https://github.com/bhaskarraorajagiri/LandingPage"
            title="Landing Page"
            disc="Modern, vibrant, growth-oriented."
          />
        </div>
        <div className={style.cardWrapper}>
          <Cards
            src={Calculator}
            link="https://github.com/bhaskarraorajagiri/CodSoft/tree/main/calculator"
            title="Calculator"
            disc="Precise, functional, utility tool."
          />
        </div>
        <div className={style.cardWrapper}>
          <Cards
            src={Extension}
            link="https://github.com/bhaskarraorajagiri/Chrome-Extenstion"
            title="Chrome-Extension"
            disc="Functional, sleek, browser utility."
          />
        </div>
      </div>
    </section>
  );
}

export default Project;
