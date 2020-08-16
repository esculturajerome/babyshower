import React from "react";
import styled from "styled-components";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Button } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

function WhiteButton({ Icon, title, caption }) {
  const anim = useSpring({
    from: { opacity: 0, marginRight: -100, marginLeft: 100 },
    to: { opacity: 1, marginLeft: 0, marginRight: 0 },
    delay: 500,
  });
  return (
    <WhiteButtonWrapper>
      <animated.div style={anim}>
        <Button className="whiteButton">
          <div className="whiteButton__icon">
            <Icon />
          </div>
          <div className="whiteButton__content">
            <p className="whiteButton__text">
              {title}
              <ArrowRightAltIcon />
            </p>
            <p className="whiteButton__caption">{caption}</p>
          </div>
        </Button>
      </animated.div>
    </WhiteButtonWrapper>
  );
}

const WhiteButtonWrapper = styled.div`
  .whiteButton {
    display: flex;
    margin: 0 0 25px 35px;
    justify-content: flex-start;
    width: fill-available;
    width: -webkit-fill-available;
    width: -moz-available;
    background: var(--white);
    box-shadow: var(--primaryShadow);
    border-radius: 15px 0 0 15px;
    padding: 20px 25px 20px;
  }
  .whiteButton__icon .MuiSvgIcon-root {
    color: ;
    margin-right: 25px;
  }
  .whiteButton__content {
    text-align: left;
  }
  .whiteButton__text {
    color: var(--primaryColor);
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: -0.3px;
  }
  .whiteButton__caption {
    color: var(--secondaryColor);
    text-transform: capitalize;
  }
  .whiteButton__text .MuiSvgIcon-root {
    margin-bottom: -7px;
    margin-left: 10px;
  }
`;

export default WhiteButton;
