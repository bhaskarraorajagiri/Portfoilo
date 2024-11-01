import React from 'react'
import style from './Skill.module.css';
import checkMark from '../../assets/checkmark-dark.svg'
import SkillsList from './SkillsList';

function Skill() {
  return (
    <section id='skills' className={style.Container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={style.skillList}>
        <SkillsList src={checkMark} skill="JAVA"/>
        <SkillsList src={checkMark} skill="PYTHON"/>
        <SkillsList src={checkMark} skill="JAVASCRIPT"/>
        <SkillsList src={checkMark} skill="HTML"/>
        <SkillsList src={checkMark} skill="CSS"/>
        </div>
        <hr/>
        <div className={style.skillList}>
        <SkillsList src={checkMark} skill="SQL"/>
        <SkillsList src={checkMark} skill="REACT"/>
        </div>
        <hr/>
        <div className={style.skillList}>
        <SkillsList src={checkMark} skill="Vs-Code"/>
        <SkillsList src={checkMark} skill="Github"/>
        </div>
        
    </section>
  )
}

export default Skill;