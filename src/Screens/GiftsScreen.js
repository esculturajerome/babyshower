import React, { useEffect } from "react";
import styled from "styled-components";

import { useStateValue } from "../utils/StateProvider";
import Cards from "../components/Cards";
import IconText from "../components/IconText";

import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";

import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import Nav from "../components/Nav";
import AppDetails from "../components/AppDetails";
import Title from "../components/Title";

function GiftsScreen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <GiftScreenWrapper>
      <div className="giftScreen">
        <Nav back />
        {/* <AppDetails /> */}
        <Title
          title="Lorem ipsum dolor sit amet, consectetur adipiscing"
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum, odio in posuere efficitur, ipsum ipsum pharetra sem, eget feugiat velit lectus ac turpis. Integer lacus libero, elementum id urna ut, euismod gravida arcu. "
        />
        <Cards imageUrl={require("../images/gcash.png")} />
        <Cards imageUrl={require("../images/bpi.png")} />
        <IconText
          Icon={LocalShippingOutlinedIcon}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum, odio in posuere efficitur, ipsum ipsum."
        />
      </div>
    </GiftScreenWrapper>
  );
}

const GiftScreenWrapper = styled.div`
  .giftScreen {
    padding: 75px 0 75px 35px;
  }
`;

export default GiftsScreen;
