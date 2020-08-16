import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import "./App.css";
import WelcomeScreen from "./Screens/WelcomeScreen";
import CheckoutScreen from "./Screens/CheckoutScreen";
import Nav from "./components/Nav";
import AppDetails from "./components/AppDetails";
import MessagesScreen from "./Screens/MessagesScreen";

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomeScreen />
          </Route>
          <Route path="/checkout">
            <CheckoutScreen />
          </Route>
          <Route path="/messages">
            <MessagesScreen />
          </Route>
          <Route pat="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
