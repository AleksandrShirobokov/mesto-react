import React from 'react'

function PopupImage(props) {
    return (
        <section className="popup popup_type_image">
            <div className="popup__wrapper">
                    <button className="popup__close popup__close_image" type="button"></button>
                    <img className="popup__image" />
                    <h2 className="popup__subtitle"></h2>
            </div>
        </section>     
    )
} 
export default PopupImage;