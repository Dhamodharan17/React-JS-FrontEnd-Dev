import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LocationSelect from "./containers/Citi/LocationSelect/LocationSelect";
import LoginPage from "./containers/Citi/LoginPage/LoginPage";
import "./stylesheets/SmallComponents.css";

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <LocationSelect />
            </Route>
            <Route path="/loginpage">
              <LoginPage/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const NavBar = () => {
  return <div className="navbar"></div>;
};
