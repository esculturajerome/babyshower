import React from "react";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";
import WhiteButton from "./WhiteButton";

function CartItem() {
  const image = useSpring({
    from: { opacity: 0, marginTop: 100 },
    to: { opacity: 1, marginTop: 0 },
    delay: 400,
  });
  return (
    <CartWrapper>
      <div className="cart__item">
        <animated.img
          src="https://ph-test-11.slatic.net/p/971223ef85fc52d383364bf536619167.jpg_720x720q80.jpg_.webp"
          alt=""
          className="cart__image"
          style={image}
        />
        <WhiteButton
          title="Lotion"
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum tempor massa in elementum. Phasellus semper felis ac risus gravida, eu scelerisque lorem commodo."
          price="600"
          lazadaLink="lazada.com"
          shopeeLink="shopee.com"
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
