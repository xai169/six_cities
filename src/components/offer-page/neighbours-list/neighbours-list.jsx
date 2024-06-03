import React, {useCallback, useState} from 'react';
import PlaceCard from '../../place-card/place-card';
import PropTypes from 'prop-types';
import {PlaceCardTypes} from '../../prop-types/place-card';

const NeighboursList = (props) => {
  const {neighbourslist} = props;
  const [, setActiveItem] = useState(null);
  const handleMouseEnter = useCallback((item) => {
    setActiveItem(item);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setActiveItem(null);
  }, []);

  return (
    <div className="near-places__list places__list">
      {neighbourslist.map((card) => {
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

NeighboursList.propTypes = {
  neighbourslist: PropTypes.arrayOf(PlaceCardTypes).isRequired,
};

export default NeighboursList;
