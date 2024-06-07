import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';

const CitiesList = (props) => {
  const {cities, onCitySelect, city} = props;
  const isActive = `tabs__item--active`;

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((town) => {
          return (
            <li className="locations__item" key={`${town}`} onClick={() => onCitySelect(town)}>
              <a className={`locations__item-link tabs__item ${city === town ? isActive : ``}`} href="#">
                <span>{town}</span>
              </a>
            </li>
          );
        })
      }
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    city: state.city
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCitySelect(city) {
      dispatch(ActionCreator.selectCity(city));
    },
  };
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCitySelect: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
