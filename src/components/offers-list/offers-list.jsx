import React, {useCallback, useState} from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';

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
  cards: PropTypes.array.isRequired,
};

export default OffersList;
