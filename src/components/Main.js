import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userDescription: "",
      userAvatar: "",
    };
  }

  static contextType = CurrentUserContext;

  render() {
    const currentUser = this.context;
    const {
      onEditAvatar,
      onAddPlace,
      onEditProfile,
      onCardClick,
      openImagePopup,
    } = this.props;
    const { userName, userDescription, userAvatar } = this.state;
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__position">
            <div className="profile__avatar-container">
              <img
                className="profile__avatar"
                src={currentUser.avatar}
                alt="аватарка" /*у меня стили настроенны на src и со style они не работают*/
              />

              <button
                className="profile__avatar-button"
                onClick={this.props.isEditAvatarPopupOpen}
              ></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                onClick={this.props.onEditProfile}
                type="button"
                aria-label="редактировать"
              ></button>
              <p className="profile__profil">{currentUser.about}</p>
            </div>
          </div>
          <button
            className="profile__add-button"
            type="button"
            onClick={this.props.isAddPlacePopupOpen}
            aria-label="добавить"
          ></button>
        </section>
        <section className="elements">
          {this.props.cards.map((card) => {
            return (
              <Card
                card={card}
                key={card._id}
                onCardClick={this.props.onCardClick}
                openImagePopup={this.props.openImagePopup}
                onCardLike={this.props.onCardLike}
                onCardDelete={this.props.onCardDelete}
              />
            );
          })}
        </section>
      </main>
    );
  }
}

export default Main;
