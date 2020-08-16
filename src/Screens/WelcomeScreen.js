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
import { Link } from "react-router-dom";

function WelcomeScreen() {
  const anim = useSpring({
    from: { opacity: 0, marginLeft: 25 },
    to: { opacity: 1, marginLeft: 0 },
  });
  return (
    <WelcomeWrapper>
      <div className="welcome">
        <Nav />
        <AppDetails />
        <div className="welcome__buttons">
          <Link to="/messages">
            <GradientButton
              Icon={MessageOutlinedIcon}
              title="View Messages"
              caption="Your message"
            />
          </Link>
        </div>
        <Title title="Title" caption="caption" />
        <Cards />
      </div>
    </WelcomeWrapper>
  );
}

const WelcomeWrapper = styled.div`
  .welcome__buttons {
    margin-left: 35px;
  }
`;

export default WelcomeScreen;
