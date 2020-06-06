import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, StorePicker, NotFound } from "./pages";

import "./css/style.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={HomePage} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
