import {Offers} from '../mocks/offers';

export const ActionType = {
  CHANGE_CITY: `ChangeCity`,
  SORT_OFFERS: `SortOffers`,
  ACTIVE_CARD: `ActiveCard`
};

export const ActionCreator = {
  selectCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  sortOffers: (sort) => ({
    type: ActionType.SORT_OFFERS,
    payload: sort,
  }),
  activeCard: (activeCard) => ({
    type: ActionType.ACTIVE_CARD,
    payload: activeCard,
  })
};

const compareOffer = {
  priceToHigh: (offerA, offerB) => offerA.price - offerB.price,
  priceToLow: (offerA, offerB) => offerB.price - offerA.price,
  rating: (offerA, offerB) => offerB.rating - offerA.rating,
};

export const sortOffers = (offers, sortType, town) => {

  switch (sortType) {
    case `Popular`:
      return Offers.filter((offer) => offer.city.name === town);
    case `Price: low to high`:
      return offers.slice().sort(compareOffer.priceToHigh);
    case `Price: high to low`:
      return offers.slice().sort(compareOffer.priceToLow);
    case `Top rated first`:
      return offers.slice().sort(compareOffer.rating);
  }

  return offers;
};
