import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { formatPrice } from "../utils/helpers";

export class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    const transitionOptions = {
      classnames: "order",
      key: key,
      timeout: { enter: 500, exit: 500 }
    };
    // make sure the fish is loaded before we continue
    if (!fish) return null;

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            Sorry {fish ? fish.name : "fish"} is no longer available
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" classNames="count">
              <CSSTransition {...transitionOptions}>
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name} {formatPrice(count * fish.price)}
            <button onClick={() => this.props.removeFromOrder(key)}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  render() {
    const orderByIds = Object.keys(this.props.order);
    const total = orderByIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order!</h2>
        <TransitionGroup component="ul" className="order">
          {orderByIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          <strong>Total {formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}
