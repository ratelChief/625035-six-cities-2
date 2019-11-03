import React from "react";
import {OffersList} from "./offers-list";
import renderer from "react-test-renderer";

it(`OffersList to be rendered correctly`, () => {
  const offers = [
    {
      desc: {
        name: ``,
        type: ``
      },
      id: ``,
      image: {
        src: ``
      },
      isPremium: false,
      price: {
        perPeriod: 0,
        period: ``
      }
    }
  ];

  const component = renderer.create(<OffersList offers={offers} />);

  expect(component).toMatchSnapshot();
});
