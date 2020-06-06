import React from "react";

import { formatPrice } from "../utils/helpers";

export class Fish extends React.Component {
  render() {
    const { name, price, desc, status, image } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? "Add To Cart" : "Sold Out"}
        </button>
      </li>
    );
  }
}

