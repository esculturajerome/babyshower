import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import { Button } from "@material-ui/core";

function GradientButton({ Icon, title, caption, onClick }) {
  const anim = useSpring({
    from: { opacity: 0, marginLeft: 25 },
    to: { opacity: 1, marginLeft: 0 },
    delay: 500,
  });

  return (
    <GradientButtonWrapper>
      <animated.div style={anim}>
        <Button className="gradientButton" onClick={onClick}>
          <div className="gradientButton__icon">
            <Icon />
          </div>
          <div className="gradientButton__content">
            <p className="gradientButton__text">
              {title}
              <ArrowRightAltIcon />
            </p>
            <p className="gradientButton__caption">{caption}</p>
          </div>
        </Button>
      </animated.div>
    </GradientButtonWrapper>
  );
}

const GradientButtonWrapper = styled.div`
  .gradientButton {
    display: flex;
    margin: 100px 0 25px 0;
    margin-left: 0;
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
