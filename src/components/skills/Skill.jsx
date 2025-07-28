import React from 'react';
import style from './Skill.module.css';
// Removed checkMark import as it's no longer used by SkillsList directly
// import checkMark from '../../assets/checkmark-dark.svg';
import SkillsList from './SkillsList';

function Skill() {
  return (
    <section id='skills' className={style.Container}>
      <h1 className='sectionTitle'>Skills</h1>

      <div className={style.skillsGrid}>
        {/* Languages */}
        <div className={style.skillGroup}>
          <h3>Programming Languages</h3>
          <div className={style.skillList}>
            <SkillsList skill="JAVA" />
            <SkillsList skill="PYTHON" />
            <SkillsList skill="JAVASCRIPT" />
            <SkillsList skill="HTML" />
            <SkillsList skill="CSS" />
          </div>
        </div>

        <hr className={style.skillGroupDivider} />

        {/* Frameworks/Databases */}
        <div className={style.skillGroup}>
          <h3>Frameworks & Databases</h3>
          <div className={style.skillList}>
            <SkillsList skill="MYSQL" />
            <SkillsList skill="NODE.JS" />
            <SkillsList skill="REACT.JS" />
          </div>
        </div>

        <hr className={style.skillGroupDivider} />

        {/* Tools */}
        <div className={style.skillGroup}>
          <h3>Tools & Platforms</h3>
          <div className={style.skillList}>
            <SkillsList skill="Vs-Code" />
            <SkillsList skill="Github" />
            <SkillsList skill="POSTMAN" />
            <SkillsList skill="AI Tools" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;