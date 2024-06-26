import React from 'react';
import PropTypes from 'prop-types';
import {PlaceCardTypes} from '../prop-types/place-card';
import {RATING_STAR_WIDTH} from '../const';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const PlaceCard = (props) => {
  const {item, onMouseEnter, onMouseLeave, onActiveCard} = props;
  const {id, isPremium, previewImage, price, isFavorite, rating, title, type} = item;

  const handleMouseEnter = () => {
    onMouseEnter(item);
    onActiveCard(item);
  };
  const handleMouseLeave = () => {
    onMouseLeave(item);
    onActiveCard({});
  };
  const favoriteBookmark = isFavorite ? `place-card__bookmark-button--active` : ``;

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${favoriteBookmark} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * RATING_STAR_WIDTH}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onActiveCard(activeCard) {
      dispatch(ActionCreator.activeCard(activeCard));
    },
  };
};

PlaceCard.propTypes = {
  item: PlaceCardTypes,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onActiveCard: PropTypes.func.isRequired,
};

export {PlaceCard};
export default connect(null, mapDispatchToProps)(PlaceCard);
