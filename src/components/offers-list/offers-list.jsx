import React from "react";
import {OfferCard} from "../offer-card/offer-card.jsx";
import PropTypes from "prop-types";

export class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: 0
    };

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(id) {
    this.setState(() => ({id}));
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard key={offer.id} {...offer} onHover={this.handleHover} />
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        desc: PropTypes.shape({
          name: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired
        }).isRequired,
        id: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        image: PropTypes.shape({
          src: PropTypes.string.isRequired
        }).isRequired,
        price: PropTypes.shape({
          perPeriod: PropTypes.number.isRequired,
          period: PropTypes.string.isRequired
        }).isRequired
      })
  ).isRequired
};
