import React from 'react'
import BlackJack from '../../assets/blackjack.jpg'
import Calculator from '../../assets/calculator.jpg'
import Extension from '../../assets/extension.jpg'


function ProjectCards(){
    const cards = [
        {
            image : {BlackJack},
            title : "BlackJack",
            link : "https://github.com/bhaskarraorajagiri/Black-Jack-Game",
            discription : "Gaming Platform"
        },
        {
            image : {Calculator},
            title : "Calculator",
            link : "https://github.com/bhaskarraorajagiri/CodSoft/tree/main/calculator",
            discription : "App"
        },
        {
            image : {Extension},
            title : "Chrome-Extension",
            link : "https://github.com/bhaskarraorajagiri/Chrome-Extenstion",
            discription : "simple-extension"
        }
    ]
    

const Card = ({image,title,link,discription}) => {
    cards.map(()=>{
        return(
            <a href={link} target='_blank'>
                    <img className='hover' src={image} alt={title} />
                    <h3>{title}</h3>
                    <p>{discription}</p>
                </a>
        )
    })}

    
}

    

export default ProjectCards;