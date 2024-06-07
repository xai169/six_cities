import {Offers} from '../mocks/offers';
import {ActionType, sortOffers} from './action';

const initialState = {
  city: `Paris`,
  offers: Offers.filter((offer) => offer.city.name === `Paris`),
  sort: `Popular`,
  activeCard: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        offers: Offers.filter((offer) => offer.city.name === action.payload),
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
    default:
      return {
        ...initialState
      };
  }
};

export {reducer};
