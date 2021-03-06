import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

function IconText({ Icon, text }) {
  const textAnim = useSpring({
    from: { opacity: 0, marginTop: 100 },
    to: { opacity: 1, marginTop: 50 },
    delay: 200,
  });
  return (
    <IconTextWrapper>
      <animated.div className="iconText" style={textAnim}>
        <div className="iconText__icon">{Icon && <Icon />}</div>
        <p className="iconText__text">{text}</p>
      </animated.div>
    </IconTextWrapper>
  );
}

const IconTextWrapper = styled.div`
  .iconText {
    display: flex;
    align-items: center;
    color: var(--secondaryColor);
    margin-top: 50px;
    margin-bottom: 50px;
    padding-right: 15px;
  }
  .iconText__text {
    margin-left: 15px;
  }
`;

export default IconText;
