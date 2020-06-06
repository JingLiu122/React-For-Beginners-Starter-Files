import React, { Component } from "react";

import { Fish, Header, Order, Inventory } from "../components";

import sampleFishes from "../utils/sample-fishes";

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {}
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    // reinstate the localStorage
    const localStorageFishesRef = localStorage.getItem(
      `${params.storeId}_fishes`
    );
    const localStorageOrderRef = localStorage.getItem(
      `${params.storeId}_order`
    );
    if (localStorageFishesRef) {
      this.setState({
        fishes: JSON.parse(localStorageFishesRef)
      });
    }
    if (localStorageOrderRef) {
      this.setState({
        order: JSON.parse(localStorageOrderRef)
      });
    }
  }

  componentDidUpdate() {
    if (this.state.fishes) {
      localStorage.setItem(
        `${this.props.match.params.storeId}_fishes`,
        JSON.stringify(this.state.fishes)
      );
    }
    localStorage.setItem(
      `${this.props.match.params.storeId}_order`,
      JSON.stringify(this.state.order)
    );
  }

  addFish = fish => {
    // 1. take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. add our new fish to the fishes variable
    fishes[`${fish.name}${Date.now()}`] = fish;
    // 3. set the new fishes object to state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // 1. takea copy of state
    const order = { ...this.state.order };
    // 2. either add to the order, or update the number of the order
    order[key] = order[key] + 1 || 1;
    // 3. call setState() to update our state object
    this.setState({ order });
  };

  updateFish = (key, updatedFish) => {
    // 1. Take a copy of the current state
    const fishes = { ...this.state.fishes };
    // 2. Update that state
    fishes[key] = updatedFish;
    // 3. Set that to tstate
    this.setState({ fishes });
  };

  deleteFish = key => {
    // 1. Take a copy of state
    const fishes = { ...this.state.fishes };
    // 2. Remove an item from that state
    fishes[key] = null;
    delete fishes[key];
    // 3. Update the state
    this.setState({ fishes });
  };

  removeFromOrder = key => {
    const order = { ...this.state.order };
    order[key] = null;
    delete order[key];
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          deleteFish={this.deleteFish}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}
