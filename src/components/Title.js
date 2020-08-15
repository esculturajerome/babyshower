import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

function Title() {
  const textAnim = useSpring({
    from: { opacity: 0, marginBottom: -175, marginTop: 175 },
    to: { opacity: 1, marginBottom: 0, marginTop: 75 },
    delay: 300,
  });
  return (
    <TitleWrapper>
      <animated.div className="title" style={textAnim}>
        <p className="title__text">12. August</p>
        <p className="title__caption">2020</p>
      </animated.div>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  .title {
    margin: 75px 0 25px 25px;
  }
  .title__text {
    font-size: 1.2rem;
    color: var(--primaryColor);
    text-transform: uppercase;
  }

  .title__caption {
    font-size: 0.9rem;
    color: var(--secondaryColor);
  }
`;

export default Title;
