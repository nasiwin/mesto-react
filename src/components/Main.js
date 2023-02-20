import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userDescription: "",
      userAvatar: "",
      cards: [],
    };
  }
  componentDidMount() {
    Promise.all([api.getProfile(), api.getDataCards()])
      .then(([data, card]) => {
        this.setState({
          userName: data.name,
          userDescription: data.about,
          userAvatar: data.avatar,
          cards: card,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const {
      onEditAvatar,
      onAddPlace,
      onEditProfile,
      onCardClick,
      openImagePopup,
    } = this.props;
    const { userName, userDescription, userAvatar, cards } = this.state;
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__position">
            <div className="profile__avatar-container">
              <img
                className="profile__avatar"
                src={this.state.userAvatar}
                alt="аватарка" /*у меня стили настроенны на src и со style они не работают*/
              />

              <button
                className="profile__avatar-button"
                onClick={this.props.isEditAvatarPopupOpen}
              ></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{this.state.userName}</h1>
              <button
                className="profile__edit-button"
                onClick={this.props.onEditProfile}
                type="button"
                aria-label="редактировать"
              ></button>
              <p className="profile__profil">{this.state.userDescription}</p>
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
          {this.state.cards.map((card) => {
            return (
              <Card
                card={card}
                key={card._id}
                onCardClick={this.props.onCardClick}
                openImagePopup={this.props.openImagePopup}
              />
            );
          })}
        </section>
      </main>
    );
  }
}

export default Main;
