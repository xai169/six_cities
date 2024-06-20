export const ActionType = {
  CHANGE_CITY: `ChangeCity`,
  SORT_OFFERS: `SortOffers`,
  ACTIVE_CARD: `ActiveCard`,
  LOAD_OFFERS: `LoadOffers`,
  REQUIRED_AUTHORIZATION: `requiredAuthorization`,
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
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
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
      return offers.slice();
    case `Price: low to high`:
      return offers.slice().sort(compareOffer.priceToHigh);
    case `Price: high to low`:
      return offers.slice().sort(compareOffer.priceToLow);
    case `Top rated first`:
      return offers.slice().sort(compareOffer.rating);
  }

  return offers;
};
