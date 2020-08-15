import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import { Button } from "@material-ui/core";

function GradientButton() {
  const anim = useSpring({
    from: { opacity: 0, marginRight: -100, marginLeft: 100 },
    to: { opacity: 1, marginLeft: 0, marginRight: 0 },
    delay: 100,
  });

  return (
    <GradientButtonWrapper>
      <animated.div style={anim}>
        <Button className="gradientButton">
          <div className="gradientButton__icon">
            <MessageOutlinedIcon />
          </div>
          <div className="gradientButton__content">
            <p className="gradientButton__text">
              Daily reflection
              <ArrowRightAltIcon />
            </p>
            <p className="gradientButton__caption">Personal growth</p>
          </div>
        </Button>
      </animated.div>
    </GradientButtonWrapper>
  );
}

const GradientButtonWrapper = styled.div`
  .gradientButton {
    display: flex;
    margin: 50px 0 25px 25px;
    justify-content: flex-start;
    width: fill-available;
    width: -webkit-fill-available;
    width: -moz-available;
    background: var(--primaryButton);
    box-shadow: var(--primaryShadowColor);
    border-radius: 15px 0 0 15px;
    padding: 20px 25px 20px;
  }
  .gradientButton:hover {
    background: var(--primaryButtonOnHover);
  }
  .gradientButton__icon .MuiSvgIcon-root {
    color: #fff;
    margin-right: 25px;
  }
  .gradientButton__content {
    text-align: left;
  }
  .gradientButton__text {
    color: var(--thirdColor);
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: -0.3px;
  }
  .gradientButton__caption {
    color: #fff;
    text-transform: capitalize;
  }
  .gradientButton__text .MuiSvgIcon-root {
    margin-bottom: -7px;
    margin-left: 10px;
  }
`;

export default GradientButton;
