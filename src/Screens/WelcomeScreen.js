import React from "react";

import styled from "styled-components";
import GradientButton from "../components/GradientButton";
import Cards from "../components/Cards";
import Nav from "../components/Nav";
import Title from "../components/Title";
import WhiteButton from "../components/WhiteButton";
import { animated, useSpring } from "react-spring";

function WelcomeScreen() {
  const anim = useSpring({
    from: { opacity: 0, marginRight: -100, marginLeft: 100 },
    to: { opacity: 1, marginLeft: 0, marginRight: 0 },
  });
  return (
    <WelcomeWrapper>
      <animated.div className="welcome" style={anim}>
        <Nav />
        <GradientButton />
        <WhiteButton />
        <Title />
        <Cards />
      </animated.div>
    </WelcomeWrapper>
  );
}

const WelcomeWrapper = styled.div``;

export default WelcomeScreen;
