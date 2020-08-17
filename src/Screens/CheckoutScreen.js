import React, { useState } from "react";
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
    <div>
      <Nav back />
      {cart.length !== 0 && <AppDetails />}
      <CartLists />
      {/* <Cards /> */}
      {/* {checkout && <GradientButton onClick={handle} />} */}
      {/* {!checkout && <WhiteButton />} */}
    </div>
  );
}

export default CheckoutScreen;
