import PopupWithForm from "./PopupWithForm";
import React from "react";
import { useState } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
    setLink("");
    setName("");
  }

  return (
    <PopupWithForm
      onClose={onClose}
      name="form-photo"
      title="Новое место"
      buttonText="Сохранить"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input"
        type="text"
        placeholder="Название"
        name="name"
        id="name-photo"
        minLength="2"
        maxLength="30"
        required
        onChange={handleChangeName}
        value={name || ""}
      />
      <div className="popup__position">
        <span id="name-error" className="popup__error"></span>
      </div>
      <input
        className="popup__input"
        type="text"
        placeholder="Ссылка на карточку"
        defaultValue=""
        name="link"
        id="link-photos"
        required
        onChange={handleChangeDescription}
        value={link || ""}
      />
      <div className="popup__position">
        <span id="profil-error" className="popup__error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
