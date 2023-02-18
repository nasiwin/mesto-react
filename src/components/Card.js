import '../pages/index.css';
import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  handleCardClick = () => {
    const { card, onCardClick, openImagePopup } = this.props;
    if (typeof onCardClick === 'function') {
      onCardClick(card);
    }
    if (typeof openImagePopup === 'function') {
      openImagePopup(true);
    }
  }

  render() {
    const { card } = this.props;

    return (
      <div className="elements__item">
        <button className="elements__trash-button" type="button">Удалить</button>
        <img className="elements__item-pic" src={card.link} alt={card.name} onClick={this.handleCardClick} />
        <div className="elements__item-text">
          <h2 className="elements__item-title">{card.name}</h2>
          <div className="elements__likeBox">
            <button className="elements__item-like" type="button" aria-label="лайк"></button>
            <div className="elements__item-likesCheck">{card.likes.length}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;