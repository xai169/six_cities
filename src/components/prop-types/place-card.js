import PropTypes from "prop-types";

export const PlaceCardTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  goods: PropTypes.array.isRequired,
  host: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  maxAdults: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
});
