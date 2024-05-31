export const Offers = [
  {
    id: 1,
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    images: [`img/1.png`, `img/2.png`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    id: 2,
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `London`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/1.png`,
      id: 1,
      isPro: true,
      name: `Angelina`
    },
    images: [`img/1.png`, `img/2.png`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 6,
    previewImage: `img/apartment-02.jpg`,
    price: 126,
    rating: 3.7,
    title: `Wood and stone place`,
    type: `apartment`
  },
  {
    id: 3,
    bedrooms: 6,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Bucharest`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    images: [`img/1.png`, `img/2.png`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 1,
    previewImage: `img/apartment-01.jpg`,
    price: 20,
    rating: 1.8,
    title: `Canal View Prinsengracht`,
    type: `apartment`
  },
  {
    id: 4,
    bedrooms: 8,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Moscow`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    images: [`img/1.png`, `img/2.png`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 220,
    rating: 0.8,
    title: `Nice, cozy, warm big bed apartment`,
    type: `apartment`
  },
];

export const FavoritesOffers = [
  {
    city: `Amsterdam`,
    id: `11`,
    items: [
      {
        id: 2,
        bedrooms: 3,
        city: {
          location: {
            latitude: 52.370216,
            longitude: 4.895168,
            zoom: 10,
          },
          name: `Amsterdam`,
        },
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        host: {
          avatarUrl: `img/avatar-angelina.jpg`,
          id: 3,
          isPro: true,
          name: `Angelina`,
        },
        images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        previewImage: `img/room.jpg`,
        price: 80,
        isFavorite: true,
        isPremium: false,
        rating: 4,
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8,
        },
        title: `Wood and stone place`,
        maxAdults: 4,
        type: `Private room`,
      },
      {
        id: 3,
        bedrooms: 3,
        city: {
          location: {
            latitude: 52.370216,
            longitude: 4.895168,
            zoom: 10,
          },
          name: `Amsterdam`,
        },
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        host: {
          avatarUrl: `img/avatar-angelina.jpg`,
          id: 3,
          isPro: true,
          name: `Angelina`,
        },
        images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        previewImage: `img/room.jpg`,
        price: 80,
        isFavorite: true,
        isPremium: false,
        rating: 4,
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8,
        },
        title: `Wood and stone place`,
        maxAdults: 4,
        type: `Private room`,
      },
    ],
  },
  {
    city: `Cologne`,
    id: `22`,
    items: [
      {
        id: 4,
        bedrooms: 3,
        city: {
          location: {
            latitude: 52.370216,
            longitude: 4.895168,
            zoom: 10,
          },
          name: `Amsterdam`,
        },
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        host: {
          avatarUrl: `img/avatar-angelina.jpg`,
          id: 3,
          isPro: true,
          name: `Angelina`,
        },
        images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        previewImage: `img/room.jpg`,
        price: 80,
        isFavorite: true,
        isPremium: false,
        rating: 4,
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8,
        },
        title: `Wood and stone place`,
        maxAdults: 4,
        type: `Private room`,
      },
    ]
  },
];

export const Username = `zxcghoul@mail.sru`;

export const MainTitle = `228 places to stay in Amsterdam`;

export const Sort = [
  {
    label: `Popular`,
    value: `Popular`,
  },
  {
    label: `Price: low to high`,
    value: `asc_price`,
  },
  {
    label: `Price: high to low`,
    value: `desc_price`,
  },
  {
    label: `Top rated first`,
    value: `top`,
  },
];
export const CitiesList = [
  {
    id: `111`,
    name: `Paris`,
  },
  {
    id: `222`,
    name: `Cologne`,
  },
  {
    id: `333`,
    name: `Brussels`,
  },
  {
    id: `444`,
    name: `Amsterdam`,
  },
  {
    id: `555`,
    name: `Hamburg`,
  },
  {
    id: `666`,
    name: `Dusseldorf`,
  },
];
export const Reviewers = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 4,
      isPro: true,
      name: `Max`,
    },
  },
  {
    comment: `Test`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 2,
    rating: 3,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 4,
      isPro: true,
      name: `Min`,
    },
  },
  {
    comment: `Test`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 3,
    rating: 3,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 4,
      isPro: true,
      name: `Mox`,
    },
  },
  {
    comment: `Test`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 4,
    rating: 3,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 4,
      isPro: true,
      name: `Mix`,
    },
  },
  {
    comment: `Test`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 5,
    rating: 3,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 4,
      isPro: true,
      name: `Mex`,
    },
  },
];
