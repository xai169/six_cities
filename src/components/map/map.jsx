import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {PlaceCardTypes} from '../prop-types/place-card';
import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import {connect} from 'react-redux';

const Map = (props) => {
  const {offers} = props;
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: 52.38333,
        lng: 4.9
      },
      zoom: 12
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);


    offers.forEach((card) => {
      const customIcon = leaflet.icon({
        iconUrl: `./img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: card.location.latitude,
        lng: card.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(card.title);
    });

    return () => {
      mapRef.current.remove();
    };
  }, [offers]);

  return (
    <>
      <div id="map" style={{height: `100%`}}></div>
    </>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(PlaceCardTypes).isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

export default connect(mapStateToProps, null)(Map);
