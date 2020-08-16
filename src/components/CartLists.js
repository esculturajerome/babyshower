import React from "react";
import styled from "styled-components";

import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { IconButton } from "@material-ui/core";
import CartItem from "./CartItem";
import Title from "./Title";

function CartLists() {
  return (
    <CartListWrapper>
      <Title title="Total: 800" caption="2 items" />
      <div className="cartList">
        <div className="cart">
          <div className="cart__icon">
            <div>
              <IconButton>
                <DeleteForeverOutlinedIcon fontSize="large" />
              </IconButton>
            </div>
          </div>
          <CartItem />
        </div>
      </div>
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
