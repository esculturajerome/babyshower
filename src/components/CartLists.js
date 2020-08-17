import React, { useState } from "react";
import styled from "styled-components";

import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { IconButton } from "@material-ui/core";
import CartItem from "./CartItem";
import Title from "./Title";
import WhiteButton from "./WhiteButton";
import { useStateValue } from "../utils/StateProvider";
import { getCartTotal } from "../utils/reducer";

import { ReactComponent as Baby } from "../images/cryingbaby.svg";
import { animated, useSpring } from "react-spring";

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

  const baby = useSpring({
    from: { opacity: 0, marginBottom: -50, marginTop: 50 },
    to: { opacity: 1, marginBottom: 0, marginTop: 0 },
  });

  const text = useSpring({
    from: { opacity: 0, marginBottom: -50, marginTop: 50 },
    to: { opacity: 1, marginBottom: 0, marginTop: 0 },
    delay: 200,
  });

  return (
    <CartListWrapper>
      {cart?.length === 0 ? (
        <div className="empty">
          <animated.div style={baby}>
            <Baby className="empty__baby" />
          </animated.div>
          <animated.div style={text}>
            <h2>Your Cart is empty</h2>
            <p className="empty__text">
              Looks like you haven't added anything to your cart yet
            </p>
          </animated.div>
        </div>
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

  .empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .empty__baby {
    width: 200px;
  }
  .empty__text {
    margin-top: 10px;
    color: var(--secondaryColor);
  }
`;

export default CartLists;
