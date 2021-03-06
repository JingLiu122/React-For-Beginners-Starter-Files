import React, { Component } from "react";
import StorePicker from "./StorePicker";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory/Inventory";

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

class HomePage extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default HomePage;
