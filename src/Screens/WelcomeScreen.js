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
import { useStateValue } from "../utils/StateProvider";
import { IconButton } from "@material-ui/core";
import Logout from "../components/Logout";

function WelcomeScreen() {
  const [{ userInfo }] = useStateValue();
  const anim = useSpring({
    from: { opacity: 0, marginLeft: 25 },
    to: { opacity: 1, marginLeft: 0 },
  });
  return (
    <WelcomeWrapper>
      <div className="welcome">
        <Nav />
        {userInfo && <AppDetails />}
        <Title title="Title" caption="caption" />
        <Cards />
        <div className="welcome__buttons">
          <Link to="/messages">
            <GradientButton
              Icon={MessageOutlinedIcon}
              title="View Messages"
              caption="Your message"
            />
          </Link>
        </div>
      </div>
      {userInfo && <Logout />}
    </WelcomeWrapper>
  );
}

const WelcomeWrapper = styled.div`
  .welcome__buttons {
    margin-left: 35px;
  }
  .welcome__logout {
    margin-left: 35px;
  }

  .welcome__logout.MuiIconButton-root {
    margin-top: 100px;
    border-radius: 15px;
    text-align: left;
  }
`;

export default WelcomeScreen;
