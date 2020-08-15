import React from "react";
import { Avatar } from "@material-ui/core";

import "./Nav.css";

function Nav() {
  return (
    <header className="header">
      <h2 className="header__name">Hi! Jerome</h2>
      <Avatar className="header__avatar">J</Avatar>
    </header>
  );
}

export default Nav;
