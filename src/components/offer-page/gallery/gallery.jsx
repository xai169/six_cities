import React from 'react';
import PropTypes from 'prop-types';

const Gallery = (props) => {
  const {images} = props;

  return (
    <div className="property__gallery">
      {
        images.map((image, index) => {
          return (
            <div className="property__image-wrapper" key={`${image}#${index}`}>
              <img className="property__image" src={image} alt="Photo studio" />
            </div>
          );
        })
      }
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Gallery;
