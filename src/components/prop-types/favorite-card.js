import PropTypes from 'prop-types';
import {PlaceCardTypes} from './place-card';

export const FavoriteCardTypes = PropTypes.shape({
  city: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  items: PlaceCardTypes.isRequired,
}).isRequired;
