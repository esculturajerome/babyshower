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
        <React.Fragment>
          {carts.length !== 0 ? (
            <Title title={`P ${getCartTotal(carts)}`} caption="Total Amount" />
          ) : (
            <EmptyCart />
          )}
          {carts.map((item) => (
            <React.Fragment>
              {/* modal */}
              <PopupModal
                open={open}
                onClick={() => handleRemoveFromCart(item.id)}
                handleClose={handleClose}
                title="Remove Item?"
                caption="Are you really sure?"
                buttonCaption="Delete"
              />
              <CartLists
                handleRemoveFromCart={() => setOpen(true)}
                lazadaUrl={() => handleLink(item.lazadaUrl)}
                shopeeUrl={() => handleLink(item.shopeeUrl)}
                item={item}
              />
            </React.Fragment>
          ))}
        </React.Fragment>

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
