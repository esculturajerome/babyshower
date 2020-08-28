import React from "react";
import styled from "styled-components";

import Nav from "../components/Nav";
import AppDetails from "../components/AppDetails";
import Card from "../components/Card";
import { useStateValue } from "../utils/StateProvider";
import CartItem from "../components/CartItem";
import DetailedCard from "../components/DetailedCard";

function ListGifts() {
  const [{ carts }] = useStateValue();
  return (
    <ListGiftsWrapper>
      <div className="listgifts">
        <Nav back />
        <AppDetails />
        <h1>List of Gift</h1>
        <DetailedCard items={carts} />
      </div>
    </ListGiftsWrapper>
  );
}

const ListGiftsWrapper = styled.div`
  .listgifts {
    padding: 75px 0 75px 35px;
  }
`;

export default ListGifts;
