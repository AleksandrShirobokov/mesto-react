import React, {useEffect} from 'react'
import Header from './Header' 
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import api from '../utils/api'

function App() {

    const [cards, setCards] = React.useState([]) 
    const [currentUser, setCurrentUser] = React.useState({});
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false); 
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false); 
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false); 
    const [selectedCard, handleCardClick] = React.useState(false);

    useEffect(() => {
        api.getInitialCards()
        .then((data) => { 
            setCards(data)
        })
        .catch(err=>console.log(err))
    },[])

    useEffect(() => {
        api.getUserInfoMe()
        .then((data) => {
            setCurrentUser(data);
        }
        )
        .catch(err=>console.log(err))
    },[])

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        handleCardClick(false);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    return (
    <>
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>
                <Header />  
                <Main 
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                cards={cards}
                />
                <Footer />

                <PopupWithForm name="edit" title="Редактировать профиль"  isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} >
                            <input className="popup__input popup__input_type_name" id="user-name" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
                            <span id="user-name-error" className="error"></span>
                            <input className="popup__input popup__input_type_job"  id="about"     name="about"  placeholder="Вид деятельности" required minLength="2" maxLength="200" />
                            <span id="about-error" className="error"></span>
                </PopupWithForm> 

                <PopupWithForm name="new-card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                            <input className="popup__input popup__input_type_title" id="name-card" placeholder="Название" name="name" minLength="2" maxLength="30" required />
                            <span id="name-card-error" className="error"></span>
                            <input className="popup__input popup__input_type_link" type="url" id="link" placeholder="Ссылка на картинку" name="link" required />
                            <span id="link-error" className="error"></span>
                </PopupWithForm>

                <PopupWithForm name="profile" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                            <input className="popup__input popup__input_type_link" type="url" id="avatar-link" placeholder="Ссылка на картинку" name="link" required />
                            <span id="avatar-link-error" className="error"></span>    
                </PopupWithForm>

                <ImagePopup card={selectedCard}  onClose={closeAllPopups}/> 

                <PopupWithForm name="delete" title="Вы уверены?" /* isOpen="popup_opened" *//>
            </CurrentUserContext.Provider>
        </div>

    </>  
  );
  
}

export default App;
