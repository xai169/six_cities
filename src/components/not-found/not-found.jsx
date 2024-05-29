import React from 'react';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="page__main page__main--index">
      <h1>404 Not Found</h1>
      <Link to="/">Перейти на главную страницу</Link>
    </main>
  );
};

export default NotFound;
