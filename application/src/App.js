import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontpage from "./components/FrontPage.js";
import About from "./components/About.js";
import Weapons from "./components/Weapons.js";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Frontpage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/:page" component={About} />
        <Route exact path="/weapons/" component={Weapons} />
        <Route exact path="/weapons/:page" component={Weapons} />
      </Switch>
    </Router>
  );
};

export default App;
