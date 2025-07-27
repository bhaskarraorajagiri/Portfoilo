import React from 'react'

function Cards({src,link,title,disc}) {
  return (
    <a href={link} target='_blank'>
                <img className='hover' src={src} alt="project-logo" />
                <h3>{title}</h3>
                <p>{disc}</p>
            </a>
  )
}

export default Cards;