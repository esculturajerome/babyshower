import React from "react";
import styled from "styled-components";

import Nav from "../components/Nav";
import AppDetails from "../components/AppDetails";
import Cards from "../components/Cards";
import Title from "../components/Title";
import GradientButton from "../components/GradientButton";

import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";

import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import Logout from "../components/Logout";
import { useStateValue } from "../utils/StateProvider";
import IconText from "../components/IconText";
import CopyAddress from "../components/CopyAddress";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function LandingScreen() {
  const [{ userInfo, gifts }] = useStateValue();
  return (
    <LandingWrapper>
      <div className="landing">
        <Nav />
        <Title
          title="Lorem ipsum dolor sit amet, consectetur adipiscing"
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum, odio in posuere efficitur, ipsum ipsum pharetra sem, eget feugiat velit lectus ac turpis. Integer lacus libero, elementum id urna ut, euismod gravida arcu. "
        />
        <Cards
          Icon={CardGiftcardOutlinedIcon}
          imageUrl={require("../images/pt.jpg")}
        />
        <IconText Icon={EventOutlinedIcon} text="May 16, 9:15 am" />
        <Title caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum, odio in posuere efficitur, ipsum ipsum pharetra sem, eget feugiat velit lectus ac turpis. Integer lacus libero, elementum id urna ut, euismod gravida arcu. " />
        <Cards
          Icon={CardGiftcardOutlinedIcon}
          imageUrl={require("../images/babybump.jpg")}
        />
        <IconText Icon={EventOutlinedIcon} text="June 4, 8:27 am" />
        <Cards
          Icon={CardGiftcardOutlinedIcon}
          imageUrl={require("../images/babyharry.jpg")}
        />
        <IconText Icon={EventOutlinedIcon} text="Baby Harry's first Picture." />
        {/* <GradientButton
          Icon={MessageOutlinedIcon}
          title="Send us a message"
          caption="Any tips and hacks as a parents"
        />
        */}
        <Link to="/gifts">
          <GradientButton
            Icon={CardGiftcardOutlinedIcon}
            title="Send us a Gift"
            caption="This will be a big help for Baby Harry's Hospital Fees"
          />
        </Link>
        {/* <AppDetails /> */}
      </div>
    </LandingWrapper>
  );
}

const LandingWrapper = styled.div`
  .landing {
    margin: 75px 0 75px 35px;
  }
`;

export default LandingScreen;
