import React from 'react'

function Main(props) {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__items">
                    <div className="profile__wrapper">
                        <img className="profile__image" src="" alt="Жак-If Кусто" />
                        <button className="profile__cursor" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">Жак-Ив Кусто</h1>
                        <p className="profile__subtitle">Исследователь океана</p>
                        <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
                    </div>
                </div>    
                <button className="profile__button-add" type="button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">

            </section>
        </main>    
    )
} 
export default Main;