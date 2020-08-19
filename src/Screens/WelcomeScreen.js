import React from "react";
import styled from "styled-components";

import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";

import GradientButton from "../components/GradientButton";
import Title from "../components/Title";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import StoryRow from "../components/StoryRow";

function WelcomeScreen() {
  return (
    <WelcomeWrapper>
      <div className="welcome">
        <Nav />
        <StoryRow />
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
    padding: 75px 0 75px 35px;
  }

  .welcome__logout.MuiIconButton-root {
    margin-top: 100px;
    border-radius: 15px;
    text-align: left;
  }
`;

export default WelcomeScreen;
