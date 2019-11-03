import React from 'react';
import {OfferCard} from './offer-card';
import renderer from 'react-test-renderer';

it(`OfferCard to be rendered correctly`, () => {

  const onHover = jest.fn();

  const offers = {
    desc: {
      name: ``,
      type: ``,
    },
    id: ``,
    image: {
      src: ``
    },
    isPremium: false,
    price: {
      perPeriod: 0,
      period: ``
    },
    onHover
  };

  const component = renderer.create(
      <OfferCard
        {...offers}
      />
  );

  expect(component).toMatchSnapshot();
});
