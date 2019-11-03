import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';

it(`App to be rendered correctly`, () => {
  const offers = [];

  const app = renderer.create(
      <App
        offers={offers}
      />
  );

  expect(app).toMatchSnapshot();
});
