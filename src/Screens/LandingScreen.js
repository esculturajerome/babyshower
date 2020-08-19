import React from "react";
import styled from "styled-components";

import Nav from "../components/Nav";
import AppDetails from "../components/AppDetails";
import Cards from "../components/Cards";
import Title from "../components/Title";
import GradientButton from "../components/GradientButton";

import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";

import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import Logout from "../components/Logout";
import { useStateValue } from "../utils/StateProvider";
import IconText from "../components/IconText";
import CopyAddress from "../components/CopyAddress";

function LandingScreen() {
  const [{ userInfo, gifts }] = useStateValue();
  return (
    <LandingWrapper>
      <div className="landing">
        <Nav />
        <AppDetails />
        <Title
          title="Lorem ipsum dolor sit amet, consectetur adipiscing"
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum, odio in posuere efficitur, ipsum ipsum pharetra sem, eget feugiat velit lectus ac turpis. Integer lacus libero, elementum id urna ut, euismod gravida arcu. "
        />
        {gifts && (
          <React.Fragment>
            <Cards Icon={CardGiftcardOutlinedIcon} gifts={gifts} />
            <IconText
              Icon={LocalShippingOutlinedIcon}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum, odio in posuere efficitur, ipsum ipsum."
            />
            <CopyAddress />
          </React.Fragment>
        )}

        {/* <Cards /> */}
        {/* <GradientButton
          Icon={MessageOutlinedIcon}
          title="Send us a message"
          caption="Any tips and hacks as a parents"
        />
        <GradientButton
          Icon={CardGiftcardOutlinedIcon}
          title="Send us a Gift"
          caption="Any tips and hacks as a parents"
        /> */}
        {userInfo && <Logout />}
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
