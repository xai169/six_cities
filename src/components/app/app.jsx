import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

const App = (props) => {
  const {cards} = props;

  return (
    <MainPage cards={cards} />
  );
};

App.propTypes = {
  cards: PropTypes.array.isRequired
};

export default App;
