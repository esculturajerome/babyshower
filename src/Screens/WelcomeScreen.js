import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";

import GradientButton from "../components/GradientButton";
import Cards from "../components/Cards";
import Title from "../components/Title";
import WhiteButton from "../components/WhiteButton";
import Nav from "../components/Nav";
import AppDetails from "../components/AppDetails";

function WelcomeScreen() {
  const anim = useSpring({
    from: { opacity: 0, marginLeft: 70 },
    to: { opacity: 1, marginLeft: 0 },
  });
  return (
    <WelcomeWrapper>
      <div className="welcome">
        <Nav />
        <AppDetails />
        <GradientButton
          Icon={MessageOutlinedIcon}
          title="Add Message"
          caption="Your message"
        />
        <WhiteButton
          Icon={MessageOutlinedIcon}
          title="Add Message"
          caption="Your message"
        />
        <Title title="Title" caption="caption" />
        <Cards />
      </div>
    </WelcomeWrapper>
  );
}

const WelcomeWrapper = styled.div``;

export default WelcomeScreen;
