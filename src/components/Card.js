import "../pages/index.css";
import React, { Component } from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false
    };
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }
  static contextType = CurrentUserContext;

  handleCardClick() {
    this.props.onCardClick(this.props.card);
    this.props.openImagePopup();
  };

  handleLikeClick() {
    this.setState({ isLiked: !this.state.isLiked });
    this.props.onCardLike(this.props.card);
  };

  handleDeleteClick() {
    this.props.onCardDelete(this.props.card);
  };

  render() {
    const currentUser = this.context;
    const { card } = this.props;
    const isOwn = card.owner._id === currentUser._id;
    const cardDelete = (
        `elements__trash-button ${isOwn && 'elements__trash-button_active'}`
    );
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `elements__item-like ${isLiked && 'elements__item-like_active'}`
    );
    return (
      <div className="elements__item">
        {isOwn && <button type="button" className={`${cardDelete}`} onClick={this.handleDeleteClick} />}
        
        <img
          className="elements__item-pic"
          src={card.link}
          alt={card.name}
          onClick={this.handleCardClick}
        />
        <div className="elements__item-text">
          <h2 className="elements__item-title">{card.name}</h2>
          <div className="elements__likeBox">
            <button type="button" className={`${cardLikeButtonClassName}`} onClick={this.handleLikeClick} />
            <div className="elements__item-likesCheck">{card.likes.length}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
