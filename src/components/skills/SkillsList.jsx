// SkillsList.jsx
import React from 'react';
import style from './Skill.module.css'; // Make sure it imports its own style module or shares Skill.module.css

const SkillsList = ({ skill }) => { // Removed 'src' prop as it's no longer needed
  return (
    <div className={style.skillItem}>
      {/* Removed the img tag: <img src={src} alt="Checkmark Icon" /> */}
      <p>{skill}</p>
    </div>
  );
};

export default SkillsList;