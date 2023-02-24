import PopupWithForm from "./PopupWithForm";
import React from "react";
import { useRef } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value = "";
  }

  return (
    <PopupWithForm
      onClose={onClose}
      name="form-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
        className="popup__input"
        type="url"
        placeholder="Ссылка на карточку"
        defaultValue=""
        name="avatar"
        id="link-avatar"
        required
      />ы
      <div className="popup__position">
        <span
          id="link-avatar-error"
          name="link-error"
          className="popup__error"
        ></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
