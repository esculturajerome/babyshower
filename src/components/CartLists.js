import React, { useState } from "react";
import styled from "styled-components";

import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

import { IconButton } from "@material-ui/core";
import WhiteButton from "./WhiteButton";

function CartLists({ handleRemoveFromCart, item, lazadaUrl, shopeeUrl }) {
  return (
    <CartListWrapper>
      <div className="cartList">
        <div className="cart">
          <div className="cart__icon">
            <div>
              <IconButton onClick={handleRemoveFromCart}>
                <DeleteForeverOutlinedIcon fontSize="large" />
              </IconButton>
            </div>
          </div>
          <div className="cart_item">
            <WhiteButton
              item={item}
              shopeeUrl={shopeeUrl}
              lazadaUrl={lazadaUrl}
            />
          </div>
        </div>
      </div>
    </CartListWrapper>
  );
}

const CartListWrapper = styled.div`
  .cart {
    display: flex;
  }
  .cart__icon {
    margin-left: -20px;
    align-self: center;
  }
  .cart_item {
    margin-left: 10px;
  }
`;

export default CartLists;
