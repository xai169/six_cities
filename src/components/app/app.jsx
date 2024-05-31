import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import OfferPage from '../offer-page/offer-page';
import NotFound from '../not-found/not-found';

const App = (props) => {
  const {cards, favoriteCards, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage cards={cards} />
        </Route>
        <Route exact path="/favorites">
          <Favorites favoriteCards={favoriteCards}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/offer/:id">
          <OfferPage reviews={reviews} cards={cards}/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cards: PropTypes.array.isRequired,
  favoriteCards: PropTypes.array.isRequired
};

export default App;
