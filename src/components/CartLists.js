import React, { useState } from "react";
import styled from "styled-components";

import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { IconButton } from "@material-ui/core";
import CartItem from "./CartItem";
import Title from "./Title";
import WhiteButton from "./WhiteButton";
import { useStateValue } from "../utils/StateProvider";
import { getCartTotal } from "../utils/reducer";

function CartLists() {
  const [{ cart }, dispatch] = useStateValue();

  const handleRemoveFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  const handleLink = (e) => {
    window.open(e, "_blank");
  };

  return (
    <CartListWrapper>
      {cart?.length === 0 ? (
        <h2>Cart is empty</h2>
      ) : (
        <div>
          <Title title={`P ${getCartTotal(cart)}`} caption="Total Amount" />
          <div className="cartList">
            {cart.map((item) => (
              <div className="cart">
                <div className="cart__icon">
                  <div>
                    <IconButton onClick={() => handleRemoveFromCart(item.id)}>
                      <DeleteForeverOutlinedIcon fontSize="large" />
                    </IconButton>
                  </div>
                </div>
                <div className="cart_item">
                  <WhiteButton item={item} handleLink={(e) => handleLink(e)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </CartListWrapper>
  );
}

const CartListWrapper = styled.div`
  .cartList {
    margin-left: 20px;
    margin-top: 25px;
    margin-bottom: 100px;
  }
  .cart {
    display: flex;
  }
  .cart__icon {
    margin-right: 10px;
    align-self: center;
  }
`;

export default CartLists;
