import React from 'react'
import Header from './Header' 
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
  <>
  <body>
    <div className="page">
    <Header />  
       <Main />
        <Footer />

        <section className="popup popup_type_edit">
            <div className="popup__container">
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="popup__form" name="changeinfo">
                    <input className="popup__input popup__input_type_name" id="user-name" name="name" placeholder="Имя" required minlength="2" maxlength="40" />
                    <span id="user-name-error" class="error"></span>
                    <input className="popup__input popup__input_type_job"  id="about"     name="about"  placeholder="Вид деятельности" required minlength="2" maxlength="200" />
                    <span id="about-error" class="error"></span>
                    <button className="popup__save popup__button">Сохранить</button>
                    <button className="popup__close popup__close_edit" type="button"></button>
                </form> 
            </div>
        </section>

        <section className="popup popup_type_new-card">
            <div className="popup__container">
                <h2 className="popup__title">Новое место</h2>
                <form className="popup__form" name="changeimage">
                    <input className="popup__input popup__input_type_title" id="name-card" placeholder="Название" name="name" minlength="2" maxlength="30" required />
                    <span id="name-card-error" className="error"></span>
                    <input className="popup__input popup__input_type_link" type="url" id="link" placeholder="Ссылка на картинку" name="link" required />
                    <span id="link-error" className="error"></span>
                    <button className="popup__save popup__save_new-card popup__button">Сохранить</button>
                    <button className="popup__close popup__close_new-card" type="button"></button>
                </form> 
            </div>
        </section>

        <section className="popup popup_type_profile">
            <div className="popup__container">
                <h2 className="popup__title">Обновить аватар</h2>
                <form className="popup__form" name="changeavatar">
                    <input className="popup__input popup__input_type_link" type="url" id="avatar-link" placeholder="Ссылка на картинку" name="link" required />
                    <span id="avatar-link-error" className="error"></span>
                    <button className="popup__save popup__save_avatar popup__button">Сохранить</button>
                    <button className="popup__close popup__close_avatar" type="button"></button>
                </form> 
            </div>
        </section>

        <section className="popup popup_type_image">
            <div className="popup__wrapper">
                    <button className="popup__close popup__close_image" type="button"></button>
                    <img className="popup__image" />
                    <h2 className="popup__subtitle"></h2>
            </div>
        </section> 

        <section className="popup popup_type_delete">
            <div className="popup__delete">
                <h2 className="popup__title">Вы уверены?</h2>
                <form className="popup__form" name="deletecard">
                    <button className="popup__save popup__save_delete popup__button">Удалить</button>
                    <button className="popup__close popup__close_delete" type="button"></button>
                </form>
            </div>
        </section>

    </div>

    <template className="template">
        <div className="element">
            <img className="element__image" />
            <button className="element__delete" type="button"></button>
            <div className="element__item">
                <h2 className="element__title"></h2>
                <div className="element__wrapper">
                    <button className="element__image-like" type="button"></button>
                    <p className="element__image-like-number"></p>
                </div>
            </div>
        </div>
    </template>
  </body>
  </>  
  );
  
}

export default App;
