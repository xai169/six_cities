import React from 'react';
// import PropTypes from 'prop-types';
import {PlaceCardTypes} from '../../prop-types/place-card';
import {RATING_STAR_WIDTH} from '../../const';
import {Link} from 'react-router-dom';

const FavoritesCard = (props) => {
  const {item} = props;
  const {id, isPremium, previewImage, price, isFavorite, rating, title, type} = item;

  const favoriteBookmark = isFavorite ? `place-card__bookmark-button--active` : ``;

  return (
    <article className="favorites__card place-card">
      {isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${favoriteBookmark} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={`width: ${Math.round(rating) * RATING_STAR_WIDTH}%`}></span>
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

FavoritesCard.propTypes = {
  item: PlaceCardTypes.isRequired
};

export default FavoritesCard;
