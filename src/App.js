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
import MessagesScreen from "./Screens/MessagesScreen";
import Nav from "./components/Nav";
import NoMatch from "./Screens/NoMatch";
import GiftsScreen from "./Screens/GiftsScreen";
import ListGifts from "./Screens/ListGifts";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <WelcomeScreen /> */}
            <LandingScreen />
          </Route>
          <Route path="/moneygift">
            <CheckoutScreen />
          </Route>
          <Route path="/listofgifts">
            <ListGifts />
          </Route>
          <Route path="/message">
            <StoriesScreen />
          </Route>
          <Route path="/messages">
            <StoriesScreen />
          </Route>
          <Route path="/gifts">
            <GiftsScreen />
          </Route>
          <Route path="/story/:id">
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
