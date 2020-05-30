import React, { Component } from "react";
import StorePicker from "./StorePicker";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory/Inventory";
import Fish from "./Fish";

import sampleFishes from "../sample-fishes";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {}
    };
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
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default HomePage;
