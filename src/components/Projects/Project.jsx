import style from './Project.module.css';
import BlackJack from '../../assets/blackjack.jpg'
import Calculator from '../../assets/calculator.jpg'
import Extension from '../../assets/extension.jpg'
import Cards from './Cards';


function Project() {
  return (
    <section id='projects' className={style.Container}>
        <h1 className={style.sectionTitle}>Projects</h1>
        <div className={style.ProjectContainer}>
            <Cards src={BlackJack} 
            link="https://github.com/bhaskarraorajagiri/Black-Jack-Game"
            title="BlackJack"
            disc="Gaming Platform"/>
            <Cards src={Calculator} 
            link="https://github.com/bhaskarraorajagiri/CodSoft/tree/main/calculator"
            title="Calculator"
            disc="App"/>
            <Cards src={Extension} 
            link="https://github.com/bhaskarraorajagiri/Chrome-Extenstion"
            title="Chrome-Extension"
            disc="simple extension"/>
        </div>
    </section>
  )
}

export default Project