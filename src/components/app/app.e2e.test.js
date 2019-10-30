import React from 'react';
import {shallow} from "enzyme";
import App from "./App";
import "../../../setupTests";

describe(`App`, () => {
  it(`Should be clicked once`, () => {
    const clickHandler = jest.fn();

    const app = shallow(
        <App
          offers={[]}
          clickHandler={clickHandler}
        />
    );

    const appHeader = app.find(`header`);
    appHeader.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
