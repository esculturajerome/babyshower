import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

function Title({ title, caption }) {
  const textAnim = useSpring({
    from: { opacity: 0, marginTop: 100 },
    to: { opacity: 1, marginTop: 50 },
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
    margin-bottom: 50px;
  }
  .title__text {
    font-size: 2rem;
    color: var(--primaryColor);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    padding-right: 15px;
  }
  .title__caption {
    margin-right: 25px;
    color: var(--secondaryColor);
  }
`;

export default Title;
