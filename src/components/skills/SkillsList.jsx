import React from 'react'

function SkillsList({src,skill}) {
  return (
    <span>
        <img src={src} alt="checkmark logo" />
        <p>{skill}</p>
    </span>
  )
}

export default SkillsList;