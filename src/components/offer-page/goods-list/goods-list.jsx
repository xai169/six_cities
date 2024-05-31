import React from 'react';
// import PropTypes from 'prop-types';

const GoodsList = (props) => {
  const {goods} = props;

  return (
    <ul className="property__inside-list">
      {
        goods.map((good, index) => {
          return (
            <li className="property__inside-item" key={`${good}#${index}`}>
              {good}
            </li>
          );
        })
      }
    </ul>
  );
};

export default GoodsList;
