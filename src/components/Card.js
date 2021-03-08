import React from 'react'

function Card(props) {
    
    return (
        <div className="element">
            <img className="element__image" src={props.card.link}/>
            <button className="element__delete" type="button"></button>
            <div className="element__item">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__wrapper">
                    <button className="element__image-like" type="button"></button>
                    <p className="element__image-like-number">{props.card.likes.length}</p>
                </div>
            </div>
        </div>   
    )
} 

export default Card;