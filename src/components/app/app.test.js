import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

it(`App to be rendered correctly`, () => {
  const settings = {
    offers: [
      `Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartament`
    ]
  };

  const app = renderer.create(
      <App
        offers={settings.offers}
      />
  );

  expect(app).toMatchSnapshot();
});
