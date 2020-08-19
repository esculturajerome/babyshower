import React from "react";
import styled from "styled-components";

import { useStateValue } from "../utils/StateProvider";
import Cards from "../components/Cards";
import IconText from "../components/IconText";

import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";

import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import Nav from "../components/Nav";
import AppDetails from "../components/AppDetails";

function GiftsScreen() {
  const [{ userInfo, gifts }] = useStateValue();

  return (
    <GiftScreenWrapper>
      <div className="giftScreen">
        <Nav back />
        <AppDetails />
        {gifts && (
          <React.Fragment>
            <Cards Icon={CardGiftcardOutlinedIcon} gifts={gifts} />
            <IconText
              Icon={LocalShippingOutlinedIcon}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum, odio in posuere efficitur, ipsum ipsum."
            />
          </React.Fragment>
        )}
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
