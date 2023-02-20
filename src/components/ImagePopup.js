import React from "react";
import "../pages/index.css";

class ImagePopup extends React.Component {
  render() {
    const { card, onClose, isOpen } = this.props;
    console.log(isOpen);
    return (
      <div
        className={`popup popup_pic-opened ${isOpen ? "popup__opened" : ""}`}
      >
        <div className="popup__pic-form">
          <button
            className="popup__close popup__close_pic"
            type="button"
            aria-label="закрыть"
            onClick={onClose}
          ></button>
          <img className="popup__img" src={card.link} alt={card.name} />
          <h2 className="popup__text">{card.name}</h2>
        </div>
      </div>
    );
  }
}

export default ImagePopup;
