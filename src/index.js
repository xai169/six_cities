import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';
import {Offers, FavoritesOffers, Reviews} from './mocks/offers';

ReactDOM.render(
    <App
      cards={Offers}
      favoriteCards={FavoritesOffers}
      reviews={Reviews}
    />,
    document.querySelector(`#root`)
);
