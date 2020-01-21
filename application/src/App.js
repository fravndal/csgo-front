import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontpage from "./components/FrontPage.js";
import About from "./components/About.js";
import Weapon from "./components/Weapon.js";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Frontpage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/:page" component={About} />
        <Route exact path="/weapons/" component={Weapon} />
        <Route exact path="/weapons/:page" component={Weapon} />
      </Switch>
    </Router>
  );
};

export default App;
