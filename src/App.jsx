import Hero from './components/Hero'
import './App.css'
import About from './components/AboutMe'
import Project from './components/Projects/Project'
import Skill from './components/skills/Skill'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <Hero/>
      <About/>
      <Project/>
      <Skill/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
