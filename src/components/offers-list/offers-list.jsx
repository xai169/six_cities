import React, {useCallback, useState} from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';
import {PlaceCardTypes} from '../prop-types/place-card';
import {connect} from 'react-redux';


const OffersList = (props) => {
  const {offers} = props;
  const [activeItem, setActiveItem] = useState(null);
  const handleMouseEnter = useCallback((item) => {
    setActiveItem(item);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setActiveItem(null);
  }, []);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((card) => {
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
  offers: PropTypes.arrayOf(PlaceCardTypes).isRequired,
};

const mapStateToProps = (state) => {
  return {
    city: state.city,
    offers: state.offers,
  };
};

export default connect(mapStateToProps)(OffersList);
