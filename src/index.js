import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/app/App.jsx";

const init = () => {
  const settings = {
    offers: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartament`],
    clickHandler: () => {},
  };

  ReactDOM.render(
      <App
        offers={settings.offers}
        clickHandler={settings.clickHandler}
      />,
      document.querySelector(`#root`)
  );
};

init();
