import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLayout from "./components/MainLayout.js";
import Frontpage from "./pages/FrontPage.js";
import About from "./pages/About.js";
import Weapons from "./pages/Weapons.js";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://localhost:5001/graphql"
});

const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <MainLayout>
      <Router>
        <Switch>
          <Route exact path="/" component={Frontpage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about/:page" component={About} />
          <Route exact path="/weapons/" component={Weapons} />
          <Route exact path="/weapons/:page" component={Weapons} />
        </Switch>
      </Router>
    </MainLayout>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
