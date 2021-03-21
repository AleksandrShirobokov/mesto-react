import React from 'react'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main(props) {

    const currentValue = React.useContext(CurrentUserContext)

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__items">
                    <div className="profile__wrapper">
                        <img className="profile__image" src={currentValue.avatar} alt={currentValue.name} />
                        <button className="profile__cursor" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">{currentValue.name}</h1>
                        <p className="profile__subtitle">{currentValue.about}</p>
                        <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
                    </div>
                </div>    
                <button className="profile__button-add" type="button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                    {props.cards.map(card => 
                    (
                        <Card 
                        onCardClick={props.onCardClick}
                        card={card}
                        key={card._id}
                        />
                    )
                    )}

            </section>

        </main>    

    )
} 
export default Main;