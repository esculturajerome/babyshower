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
import StoriesScreen from "./Screens/StoriesScreen";
import { useStateValue } from "./utils/StateProvider";
import LandingScreen from "./Screens/LandingScreen";

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
  const [{ userInfo }] = useStateValue();

  console.log(userInfo, "userInfo");
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            {userInfo ? <LandingScreen /> : <WelcomeScreen />}
          </Route>
          <Route path="/checkout">
            <CheckoutScreen />
          </Route>
          <Route path="/message">
            <StoriesScreen />
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
