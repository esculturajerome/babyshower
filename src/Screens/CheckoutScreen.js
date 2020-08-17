import React, { useState } from "react";
import styled from "styled-components";

import Cards from "../components/Cards";
import AppDetails from "../components/AppDetails";
import Nav from "../components/Nav";
import CartLists from "../components/CartLists";
import { useStateValue } from "../utils/StateProvider";

function CheckoutScreen() {
  const [checkout, setcheckout] = useState(true);
  const [{ cart }] = useStateValue();

  const handle = () => {
    setTimeout(() => setcheckout(!checkout), 700);
  };

  return (
    <CheckoutWrapper>
      <div className="checkout">
        <Nav back />
        {cart.length !== 0 && <AppDetails />}
        <CartLists />
        {/* <Cards /> */}
        {/* {checkout && <GradientButton onClick={handle} />} */}
        {/* {!checkout && <WhiteButton />} */}
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
