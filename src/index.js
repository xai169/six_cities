import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';

const CARDS_COUNT = new Array(5).fill(1);

ReactDOM.render(
    <App
      cards={CARDS_COUNT}
    />,
    document.querySelector(`#root`)
);
