import React, { Component } from "react";
import StorePicker from "./StorePicker";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class HomePage extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default HomePage;
