import React from 'react'
import PopupWithForm from './PopupWithForm'

function EditProfilePopup(props) {
    return (
        <PopupWithForm name="edit" title="Редактировать профиль" className='popup popup_type_edit' isOpen={props.isOpen && 'popup_opened'} onClose={props.onClose} >
            <input className="popup__input popup__input_type_name" id="user-name" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
            <span id="user-name-error" className="error"></span>
            <input className="popup__input popup__input_type_job"  id="about"     name="about"  placeholder="Вид деятельности" required minLength="2" maxLength="200" />
            <span id="about-error" className="error"></span>
        </PopupWithForm> 
    )
} 
export default EditProfilePopup;