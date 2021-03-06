import React, { useState } from "react";
import styled from "styled-components";

import Cards from "../components/Cards";
import AppDetails from "../components/AppDetails";
import Nav from "../components/Nav";
import CartLists from "../components/CartLists";
import { useStateValue } from "../utils/StateProvider";
import { getCartTotal } from "../utils/reducer";

import Title from "../components/Title";
import EmptyCart from "../components/EmptyCart";
import PopupModal from "../components/PopupModal";

function CheckoutScreen() {
  const [{ userInfo, carts }, dispatch] = useStateValue();

  const [open, setOpen] = useState(false);

  const handleRemoveFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLink = (e) => {
    window.open(e, "_blank");
  };

  return (
    <CheckoutWrapper>
      <div className="checkout">
        <Nav back />
        <AppDetails />
      </div>
    </CheckoutWrapper>
  );
}

const CheckoutWrapper = styled.div`
  .checkout {
    margin: 75px 0 75px 35px;
  }
`;

export default CheckoutScreen;
