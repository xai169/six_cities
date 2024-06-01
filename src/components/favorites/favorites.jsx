import React from 'react';
import PropTypes from 'prop-types';
import FavoritesCard from './favorites-card/favorites-card';
import {Link} from 'react-router-dom';
import {FavoriteCardTypes} from '../prop-types/favorite-card';

const Favorites = (props) => {
  const {favoriteCards} = props;
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
                  <Link className="header__nav-link header__nav-link--profile" to="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                favoriteCards.map((card)=> {
                  return (
                    <li className="favorites__locations-items" key={card.id}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{card.city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {
                          card.items.map((item) => {
                            return (
                              <FavoritesCard
                                key={item.id}
                                item={item}/>
                            );
                          })
                        }
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  favoriteCards: PropTypes.arrayOf(FavoriteCardTypes).isRequired,
};

export default Favorites;
