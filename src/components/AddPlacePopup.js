import React from 'react'
import PopupWithForm from './PopupWithForm'

function AddPlacePopup(props) {

    const placeNameRef = React.useRef()
    const placeLinkRef = React.useRef()
    const [placeName, setPlaceName] = React.useState('')
    const [placeLink, setPlaceLink] = React.useState('')

    function dischargeNameInput(e) {
        setPlaceName(e.target.value)
    }

    function dischargeLinkInput(e) {
        setPlaceLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.onAddCard({
            link: placeLinkRef.current.value,
            name: placeNameRef.current.value
        })
        setPlaceName('')
        setPlaceLink('')
    }

    return (
        <PopupWithForm name="new-card" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} children={(
        <>
            <input ref={placeNameRef} value={placeName} onChange={dischargeNameInput} className="popup__input popup__input_type_title" id="name-card" placeholder="Название" name="name" minLength="2" maxLength="30" required />
            <span id="name-card-error" className="error"></span>
            <input ref={placeLinkRef} value={placeLink} onChange={dischargeLinkInput} className="popup__input popup__input_type_link" type="url" id="link" placeholder="Ссылка на картинку" name="link" required />
            <span id="link-error" className="error"></span> 
        </>
        )}>
        </PopupWithForm> 
    )
}

export default AddPlacePopup;