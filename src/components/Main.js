import React, { useEffect } from 'react'
import api from '../utils/api'
import Card from './Card'

function Main(props) {

    const [userName, setUserName] = React.useState()
    const [userDescription, setUserDescription] = React.useState()
    const [userAvatar, setUserAvatar] = React.useState()
    const [cards, setCards] = React.useState([]) 

    useEffect(() => {
        api.getUserInfoMe()
        .then((data) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar)}
        )
        .catch(err=>console.log(err))
    })

    useEffect(() => {
        api.getInitialCards()
        .then((data) => {
            const cards = data.map(data => {
                return{
                    likes: data.likes,
                    name: data.name,
                    link: data.link
                }
            }) 
            setCards(cards)
            console.log(cards)
        })
        .catch(err=>console.log(err))
    },[])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__items">
                    <div className="profile__wrapper">
                        <img className="profile__image"  src={userAvatar}/>
                        <button className="profile__cursor" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">{userName}</h1>
                        <p className="profile__subtitle">{userDescription}</p>
                        <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
                    </div>
                </div>    
                <button className="profile__button-add" type="button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">

            </section>

            
            <section className="elements">                
                    {cards.map(card => 
                        <Card 
                        card={card}
                        key={card._id}
                        />
                    )}                
            </section>
        </main>    

    )
} 
export default Main;