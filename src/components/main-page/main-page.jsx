import React, {useEffect} from 'react';
import OffersList from '../offers-list/offers-list';
import PropTypes from 'prop-types';
import {PlaceCardTypes} from '../prop-types/place-card';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import {connect} from 'react-redux';
import Sorting from '../sorting/sorting';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchOffersList} from "../../store/api-actions";

const MainPage = (props) => {
  const {citiesList, offers, city, sortingList, isDataLoaded, onLoadData} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            {
              <CitiesList cities={citiesList}/>
            }
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} {offers.length === 1 ? `place` : `places`} to stay in {city}</b>
              {<Sorting sortingList={sortingList}/>}
              <div className="cities__places-list places__list tabs__content">
                {<OffersList cards={offers}/>}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {<Map cards={offers}/>}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offers: PropTypes.arrayOf(PlaceCardTypes).isRequired,
  citiesList: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortingList: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    city: state.city,
    offers: state.offers,
    isDataLoaded: state.isDataLoaded,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffersList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
