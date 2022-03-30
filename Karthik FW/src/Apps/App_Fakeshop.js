import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../stylesheets/App_Fakeshop.css'

import ProductDetails from '../containers/FakeStore/ProductDetails';
import Header from '../containers/FakeStore/Header';
import ProductListing from '../containers/FakeStore/ProductListing';
  


function App_Fakeshop() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App_Fakeshop;