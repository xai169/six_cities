
import {ActionType, sortOffers} from './action';
import {AuthorizationStatus} from '../const';

const initialState = {
  city: `Paris`,
  offers: [],
  sort: `Popular`,
  activeCard: {},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        offers: state.loadOffers.slice().filter((offer) => offer.city.name === action.payload),
      };
    case ActionType.SORT_OFFERS:
      return {
        ...state,
        sort: action.payload,
        offers: sortOffers(state.offers, action.payload, state.city),
      };
    case ActionType.ACTIVE_CARD:
      return {
        ...state,
        activeCard: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        loadOffers: action.payload,
        offers: action.payload.slice().filter((offer) => offer.city.name === `Paris`),
        isDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    default:
      return {
        ...initialState
      };
  }
};

export {reducer};
