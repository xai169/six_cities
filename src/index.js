import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {reducer} from "./store/reducer";
import {Offers, FavoritesOffers, Reviews, CitiesList, Sort} from './mocks/offers';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App
        cards={Offers}
        favoriteCards={FavoritesOffers}
        reviews={Reviews}
        citiesList={CitiesList}
        sortingList={Sort}
      />
    </Provider>,
    document.querySelector(`#root`)
);
