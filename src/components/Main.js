import React from 'react'

function Main() {
    
        function handleEditAvatarClick() {
            const avatar = document.querySelector('.popup_type_profile');
            avatar.classList.add('popup_opened');
        }
    
        function handleEditProfileClick() {
            const profile = document.querySelector('.popup_type_edit');
            profile.classList.add('popup_opened');
        }

        function handleAddPlaceClick() {
            const card = document.querySelector('.popup_type_new-card');
            card.classList.add('popup_opened');
        }


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__items">
                    <div className="profile__wrapper">
                        <img className="profile__image" src="" alt="Жак-If Кусто" />
                        <button className="profile__cursor" onClick={handleEditAvatarClick}></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">Жак-Ив Кусто</h1>
                        <p className="profile__subtitle">Исследователь океана</p>
                        <button className="profile__button-edit" type="button" onClick={handleEditProfileClick}></button>
                    </div>
                </div>    
                <button className="profile__button-add" type="button" onClick={handleAddPlaceClick}></button>
            </section>

            <section className="elements">

            </section>
        </main>    
    )
} 
export default Main;