import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const CitiesList = (props) => {
  const {cities, onCitySelect, city} = props;
  const isActive = `tabs__item--active`;

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((town) => {
          return (
            <li className="locations__item" key={town.id} onClick={() => onCitySelect(town.name)}>
              <a className={`locations__item-link tabs__item ${city === town.name ? isActive : ``}`} href="#">
                <span>{town.name}</span>
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

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
