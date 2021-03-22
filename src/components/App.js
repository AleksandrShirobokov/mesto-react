import React, {useEffect} from 'react'
import Header from './Header' 
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import api from '../utils/api'
import EditProfilePopup from './EditProfilePopup'

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
            console.log(data)
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

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleDeleteCard(card) {
        api.delCard(card._id)
        .then(() => {
            setCards((state) => state.filter((c) => c._id !== card._id)
        )})
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
                onCardLike={handleCardLike}
                onCardDelete={handleDeleteCard}
                />
                <Footer />

                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}></EditProfilePopup>

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
