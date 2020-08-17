import React from "react";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";
import WhiteButton from "./WhiteButton";

function CartItem({ item }) {
  const image = useSpring({
    from: { opacity: 0, marginTop: 100 },
    to: { opacity: 1, marginTop: 0 },
    delay: 400,
  });
  return (
    <CartWrapper>
      <div className="cart__item">
        {/* <animated.img
          src={item.imageUrl}
          alt={item.title}
          className="cart__image"
          style={image}
        /> */}
        <WhiteButton
          imageUrl={item.imageUrl}
          title={item.title}
          caption={item.caption}
          price="600"
          lazadaUrl={item.lazadaUrl}
          shopeeUrl={item.shopeeUrl}
        />
      </div>
    </CartWrapper>
  );
}

const CartWrapper = styled.div`
  .cart__item {
    display: flex;
    flex-direction: column;
    width: fill-available;
    width: -webkit-fill-available;
    width: -moz-available;
  }
  .cart__image {
    height: 200px;
    width: 200px;
    object-fit: contain;
    border-radius: 18px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

export default CartItem;
