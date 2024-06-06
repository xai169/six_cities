import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const Sorting = (props) => {
  const {sortingList, sort, onSortSelect} = props;
  const isActive = `places__option--active`;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {sort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {
          sortingList.map((it) => {
            return (
              <li className="places__option" tabIndex="0" key={it.value} onClick={() => onSortSelect(it.label)}>{it.label}</li>
            );
          })
        }
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    sort: state.sort
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSortSelect(sort) {
      dispatch(ActionCreator.sortOffers(sort));
    },
  };
};

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
