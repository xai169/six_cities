import React from 'react';
import PropTypes from 'prop-types';
import Reviews from '../reviews/reviews';
import GoodsList from './goods-list/goods-list';
import Gallery from './gallery/gallery';
import NeighboursList from './neighbours-list/neighbours-list';
import Map from '../map/map';
import {useParams, Link} from 'react-router-dom';
import {RATING_STAR_WIDTH} from '../const';
import {PlaceCardTypes} from '../prop-types/place-card';
import {ReviewTypes} from '../prop-types/review';

const OfferPage = (props) => {
  const {reviews, cards, neighbourslist} = props;
  const id = Number(useParams().id);
  const offer = cards.find((card) => card.id === id);
  const {bedrooms, description, goods, host, images, isFavorite, isPremium, maxAdults, price, rating, title, type} = offer;

  const favoriteBookmark = isFavorite ? `property__bookmark-button--active` : ``;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            {
              <Gallery images={images}/>
            }
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ${favoriteBookmark} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.round(rating) * RATING_STAR_WIDTH}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                {
                  <GoodsList goods={goods}/>
                }
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro && <span className="property__user-status">
                    Pro
                  </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              {
                <Reviews reviews={reviews}/>
              }
            </div>
          </div>
          <section className="property__map map">
            {
              <Map cards={neighbourslist}/>
            }
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {
              <NeighboursList neighbourslist={neighbourslist}/>
            }
          </section>
        </div>
      </main>
    </div>
  );
};

OfferPage.propTypes = {
  reviews: PropTypes.arrayOf(ReviewTypes).isRequired,
  cards: PropTypes.arrayOf(PlaceCardTypes).isRequired,
  neighbourslist: PropTypes.arrayOf(PlaceCardTypes).isRequired,
};

export default OfferPage;
