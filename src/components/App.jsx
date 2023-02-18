import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../pages/index.css';
import logo from '../images/logo.svg';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup';



function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const popupName = document.body.querySelector('.popup-photos');
  const openImagePopup = () => setIsImagePopupOpen(true)

  const handleEditProfileClick = () => {
    setIsEditProfileOpen(true);
    if (!popupName) {
      console.log(1);
      return;
    }
    console.log(popupName);
    popupName.classList.add('popup__opened');
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
    if (!popupName) {
      console.log(1);
      return;
    }
    console.log(popupName);
    popupName.classList.add('popup__opened');
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
    if (!popupName) {
      console.log(1);
      return;
    }
    console.log(popupName);
    popupName.classList.add('popup__opened');
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  };

  useEffect(() => {
    if (popupName) {
      popupName.classList.add('popup__opened');
    }
  }, [isAddPlacePopupOpen, isEditProfileOpen, isEditAvatarPopupOpen]);

  return (
    <div className="page">
      <Header logo={logo} />
      <Main
        onEditProfile={handleEditProfileClick}
        isEditAvatarPopupOpen={handleEditAvatarClick}
        isAddPlacePopupOpen={handleAddPlaceClick}
        onCardClick={setSelectedCard}
        openImagePopup={openImagePopup}
      />
      <Footer />
      <PopupWithForm  name="profile" title="Редактировать профиль" buttonText="Сохранить" isOpen = {isEditProfileOpen} onClose={closeAllPopups}>
        <input className="popup__input popup__input_name" type="text" placeholder="Имя" name="name" defaultValue="" id="name" minLength="2" maxLength="40" required />
        <div className="popup__position">
          <span id="name-error" className="popup__error"></span>
        </div>
        <input className="popup__input popup__input_profil" type="text" placeholder="О себе" name="about" defaultValue="" id="profil" minLength="2" maxLength="200" required />
        <div className="popup__position">
          <span id="profil-error" className="popup__error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm onClose={closeAllPopups} name="form-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen = {isEditAvatarPopupOpen}>
        <input className="popup__input" type="url" placeholder="Ссылка на карточку" defaultValue="" name="avatar" id="link-avatar" required />
        <div className="popup__position">
          <span id="link-avatar-error" name="link-error" className="popup__error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm onClose={closeAllPopups} name="form-photo" title="Новое место" buttonText="Сохранить" isOpen = {isAddPlacePopupOpen}>
        <input className="popup__input" type="text" placeholder="Название" name="name" id="name-photo" minLength="2" maxLength="30" required />
        <div className="popup__position">
          <span id="name-error" className="popup__error"></span>
        </div>
        <input className="popup__input" type="text" placeholder="Ссылка на карточку"defaultValue="" name="link" id="link-photos" required/>
        <div className="popup__position">
          <span id="profil-error" className="popup__error"></span>
        </div>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} ></ImagePopup>
    </div>
      );
    
    }
    
    export default App;
