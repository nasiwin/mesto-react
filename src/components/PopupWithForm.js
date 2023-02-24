import React from "react";
import "../pages/index.css";

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={`popup popup-${this.props.name} ${
          this.props.isOpen && "popup__opened"
        }`}
      >
        <div className={`popup__container popup__container-${this.props.name}`}>
          <button
            type="button"
            className={`popup__close `}
            onClick={this.props.onClose}
          />

          <form
            action="URL"
            name={this.props.name}
            className={`popup__form form-${this.props.name}`}
            onSubmit={this.props.onSubmit}
          >
            <h3 className="popup__title">{this.props.title}</h3>
            {this.props.children}
            <button
              type="submit"
              className={`popup__save form__button_type_${this.props.name}`}
              onSubmit={this.props.onSubmit}
            >
              {this.props.buttonText}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PopupWithForm;
