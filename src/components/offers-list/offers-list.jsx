import React, {useCallback, useState} from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';
import {PlaceCardTypes} from '../prop-types/place-card';

const OffersList = (props) => {
  const {cards} = props;
  const [, setActiveItem] = useState(null);
  const handleMouseEnter = useCallback((item) => {
    setActiveItem(item);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setActiveItem(null);
  }, []);

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => {
        return (
          <PlaceCard
            key={card.id}
            item={card}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}/>
        );
      })}
    </div>
  );
};

OffersList.propTypes = {
  cards: PropTypes.arrayOf(PlaceCardTypes).isRequired,
};

export default OffersList;
