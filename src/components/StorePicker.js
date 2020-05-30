import React, { Component } from "react";

import { getFunName } from "../helpers";

// value vs. defaultValue attribute
// - value: takes jsx
// - defaultValue: takes string
export default class StorePicker extends Component {
  myInput = React.createRef();
  goToStore = event => {
    // 1. stop the form from submitting
    event.preventDefault();
    // 2. get the text from the input
    const storeName = this.myInput.current.defaultValue;
    // const storeName = event.target.input.value;
    // 3. change the page to /store/whatever-is-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          // name="input"
          type="text"
          ref={this.myInput}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit The Store</button>
      </form>
    );
  }
}
