import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

function Title({ title, caption }) {
  const textAnim = useSpring({
    from: { opacity: 0, marginBottom: -175, marginTop: 175 },
    to: { opacity: 1, marginBottom: 0, marginTop: 75 },
    delay: 300,
  });
  return (
    <TitleWrapper>
      <animated.div className="title" style={textAnim}>
        <p className="title__text">{title}</p>
        <p className="title__caption">{caption}</p>
      </animated.div>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  .title {
    margin-bottom: 25px;
  }
  .title__text {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: var(--primaryColor);
    text-transform: uppercase;
  }
  .title__caption {
    margin-right: 25px;
    font-size: 0.8rem;
    color: var(--secondaryColor);
  }
`;

export default Title;
