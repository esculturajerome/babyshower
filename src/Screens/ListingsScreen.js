import React from "react";
import Nav from "../components/Nav";
import Content from "../components/Content";
import Cards from "../components/Cards";

import "./ListingsScreen.css";

function ListingsScreen() {
  return (
    <div className="listings">
      <Nav />
      <Content />
      <Cards />
    </div>
  );
}

export default ListingsScreen;
