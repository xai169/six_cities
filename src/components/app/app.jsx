import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Login from '../login-page/login-page';
import OfferPage from '../offer-page/offer-page';
import NotFound from '../not-found-page/not-found-page';
import {PlaceCardTypes} from '../prop-types/place-card';
import {ReviewTypes} from '../prop-types/review';
import {FavoriteCardTypes} from '../prop-types/favorite-card';

const App = (props) => {
  const {cards, favoriteCards, reviews, citiesList, sort} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            cards={cards}
            citiesList={citiesList}
            sortingList={sort}
          />
        </Route>
        <Route exact path="/favorites">
          <Favorites favoriteCards={favoriteCards}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/offer/:id">
          <OfferPage
            reviews={reviews}
            cards={cards}
            neighbourslist={cards.slice(0, 3)}
          />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cards: PropTypes.arrayOf(PlaceCardTypes).isRequired,
  reviews: PropTypes.arrayOf(ReviewTypes).isRequired,
  favoriteCards: PropTypes.arrayOf(FavoriteCardTypes).isRequired,
};

export default App;
