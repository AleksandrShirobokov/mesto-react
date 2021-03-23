import React from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props) {

    const avatarRef = React.useRef()

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
          link: avatarRef.current.value
        });
    }

    return (
        <PopupWithForm name="profile" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} children={(
        <>
            <input className="popup__input popup__input_type_link" type="url" id="avatar-link" placeholder="Ссылка на картинку" name="link" required ref={avatarRef} />
            <span id="avatar-link-error" className="error"></span> 
        </>
        )}>
        </PopupWithForm> 
    )
} 
export default EditAvatarPopup;


