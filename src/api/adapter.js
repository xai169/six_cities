export const adaptOfferToClient = (offer) => {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        host: {
          avatarUrl: offer.host.avatar_url,
          id: offer.host.id,
          isPro: offer.host.is_pro,
          name: offer.host.name
        },
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        maxAdults: offer.max_adults,
        previewImage: offer.preview_image,
      }
  );

  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;
  delete adaptedOffer.host.avatar_url;
  // delete adaptedOffer.host.id;
  delete adaptedOffer.host.is_pro;
  // delete adaptedOffer.host.name;
  return adaptedOffer;
};
