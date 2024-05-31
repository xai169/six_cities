import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';
import {Offers, FavoritesOffers} from './mocks/offers';

ReactDOM.render(
    <App
      cards={Offers}
    />,
    document.querySelector(`#root`)
);
