import React from "react";
import styled from "styled-components";

import { animated, useSpring } from "react-spring";

import { ReactComponent as Baby } from "../images/cryingbaby.svg";
import RemoveShoppingCartOutlinedIcon from "@material-ui/icons/RemoveShoppingCartOutlined";

import IconText from "./IconText";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import Title from "./Title";

function EmptyCart() {
  const baby = useSpring({
    from: { opacity: 0, marginTop: 100 },
    to: { opacity: 1, marginTop: 50 },
  });

  return (
    <EmptyWrapper>
      <div className="empty">
        <animated.div style={baby} className="empty__babyContainer">
          <Baby className="empty__baby" />
        </animated.div>
        <animated.div className="empty__content" style={baby}>
          <Title title="Your Cart is Empty" />
          <IconText
            Icon={RemoveShoppingCartOutlinedIcon}
            text="Looks like you haven't added anything to your cart yet"
          />
          <Link to="/">
            <IconButton className="empty__btn">
              <p>View list of Gifts</p>
            </IconButton>
          </Link>
        </animated.div>
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
    object-fit: contain;
    height: 250px;
  }
  .empty__btn {
    margin-left: 50px;
  }
  .empty__content {
    margin-top: 50px;
  }
  .MuiIconButton-root {
    border-radius: 15px;
    text-align: left;
    color: var(--primaryColor);
  }
`;

export default EmptyCart;
