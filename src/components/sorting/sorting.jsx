import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';

const Sorting = (props) => {
  const {sortingList, sort, onSortSelect} = props;
  const isActive = `places__option--active`;
  const [isSortingListShow, setSortingListShow] = useState(false);
  const handleSortingListShow = () => {
    setSortingListShow(!isSortingListShow);
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={handleSortingListShow}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {sort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortingListShow ? `places__options--opened` : ``}`}>
        {
          sortingList.map((sortingItem) => {
            return (
              <li className={`places__option ${sortingItem === sort ? isActive : ``}`} tabIndex="0" key={sortingItem} onClick={() => onSortSelect(sortingItem)}>{sortingItem}</li>
            );
          })
        }
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  sortingList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSortSelect: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
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
