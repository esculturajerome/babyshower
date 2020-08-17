import React from "react";
import styled from "styled-components";

import { animated, useSpring } from "react-spring";

import { ReactComponent as Baby } from "../images/cryingbaby.svg";
import RemoveShoppingCartOutlinedIcon from "@material-ui/icons/RemoveShoppingCartOutlined";

import IconText from "./IconText";

function EmptyCart() {
  const baby = useSpring({
    from: { opacity: 0, marginBottom: -50, marginTop: 50 },
    to: { opacity: 1, marginBottom: 0, marginTop: 0 },
  });

  return (
    <EmptyWrapper>
      <div className="empty">
        <div className="empty__image">
          <animated.div style={baby}>
            <Baby className="empty__baby" />
          </animated.div>
        </div>
        <div className="empty__content">
          <h2 className="empty__title">Your Cart is Empty!</h2>
          <IconText
            Icon={RemoveShoppingCartOutlinedIcon}
            text="Looks like you haven't added anything to your cart yet"
          />
        </div>
      </div>
    </EmptyWrapper>
  );
}

const EmptyWrapper = styled.div`
  .empty {
    display: flex;
    flex-direction: column;
  }
  .empty__baby {
    width: 200px;
  }
  .empty__image {
    align-self: center;
  }
`;

export default EmptyCart;
