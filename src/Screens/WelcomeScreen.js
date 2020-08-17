import React from "react";
import styled from "styled-components";

import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";

import GradientButton from "../components/GradientButton";
import Cards from "../components/Cards";
import Title from "../components/Title";
import WhiteButton from "../components/WhiteButton";
import Nav from "../components/Nav";
import AppDetails from "../components/AppDetails";
import { Link } from "react-router-dom";
import { useStateValue } from "../utils/StateProvider";
import { IconButton } from "@material-ui/core";
import IconText from "../components/IconText";

function WelcomeScreen() {
  return (
    <WelcomeWrapper>
      <div className="welcome">
        <Nav />
        <Title
          title="Lorem ipsum dolor sit amet"
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum, odio in posuere efficitur, ipsum ipsum pharetra sem, eget feugiat velit lectus ac turpis. Integer lacus libero, elementum id urna ut, euismod gravida arcu. "
        />

        {/* {messages && <Cards Icon={MessageOutlinedIcon} messages={messages} />} */}
        <div className="welcome__buttons">
          <Link to="/message">
            <GradientButton
              Icon={MessageOutlinedIcon}
              title="Send us a message"
              caption="Any tips and hacks as a parents"
            />
          </Link>
          <GradientButton
            Icon={CardGiftcardOutlinedIcon}
            title="Send us a Gift"
            caption="Any tips and hacks as a parents"
          />
        </div>
      </div>
    </WelcomeWrapper>
  );
}

const WelcomeWrapper = styled.div`
  .welcome {
    margin: 75px 0 75px 35px;
  }

  .welcome__logout.MuiIconButton-root {
    margin-top: 100px;
    border-radius: 15px;
    text-align: left;
  }
`;

export default WelcomeScreen;
