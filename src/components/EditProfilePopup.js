import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from "react";
import { useState, useEffect, useContext } from "react";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (isOpen && currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <input
        className="popup__input popup__input_name"
        type="text"
        placeholder="Имя"
        name="name"
        id="name"
        minLength="2"
        maxLength="40"
        required
        value={name}
        onChange={handleChangeName}
      />
      <div className="popup__position">
        <span id="name-error" className="popup__error"></span>
      </div>
      <input
        className="popup__input popup__input_profil"
        type="text"
        placeholder="О себе"
        name="about"
        id="profil"
        minLength="2"
        maxLength="200"
        required
        value={description}
        onChange={handleChangeDescription}
      />
      <div className="popup__position">
        <span id="profil-error" className="popup__error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
