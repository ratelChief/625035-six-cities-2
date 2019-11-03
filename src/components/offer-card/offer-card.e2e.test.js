import React from 'react';
import {shallow} from 'enzyme';
import {OfferCard} from './offer-card';
import "../../../setupTests";

describe(`OfferCard`, () => {
  it(`Should hovered`, () => {
    const data = {
      desc: {
        name: ``,
        type: ``
      },
      id: `id1`,
      image: {
        src: ``
      },
      isPremium: false,
      price: {
        perPeriod: 0,
        period: ``
      },
    };
    const cb = jest.fn();

    const component = shallow(
        <OfferCard
          {...data}
          onHover={cb}
        />
    );

    const target = component.find(`.cities__place-card`);
    target.simulate(`mouseEnter`);
    expect(cb).toHaveBeenCalledTimes(1);
  });

  it(`Should hovered wth id`, () => {
    const data = {
      desc: {
        name: ``,
        type: ``
      },
      id: `id1`,
      image: {
        src: ``
      },
      isPremium: false,
      price: {
        perPeriod: 0,
        period: ``
      },
    };
    const cb = jest.fn();

    const component = shallow(
        <OfferCard
          {...data}
          onHover={cb}
        />
    );

    const target = component.find(`.cities__place-card`);
    target.simulate(`mouseEnter`);
    expect(cb).toHaveBeenCalledWith(`id1`);
  });
});
