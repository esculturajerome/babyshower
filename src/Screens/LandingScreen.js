import React from "react";
import styled from "styled-components";

import Nav from "../components/Nav";
import AppDetails from "../components/AppDetails";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChildFriendlyOutlinedIcon from "@material-ui/icons/ChildFriendlyOutlined";
import ChildCareOutlinedIcon from "@material-ui/icons/ChildCareOutlined";
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

import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";

function LandingScreen() {
  const [{ userInfo, gifts }] = useStateValue();
  return (
    <LandingWrapper>
      <div className="landing">
        <Nav />
        <Cards imageUrl={require("../images/babyharry.jpg")} />
        <IconText
          Icon={EventOutlinedIcon}
          text="Harry was born last Saturday, October 3 at 4:00 AM PHT at Bernardino General Hospital. He’s so excited to see the world and only spent 28 weeks inside Mama Gel’s womb."
        />
        <IconText
          Icon={CameraAltOutlinedIcon}
          text="This is a stolen shot. Taking pictures and videos are prohibited in the nursery."
        />
        <Title
          title="Surprise. Panic. Fear. Love. Joy."
          caption="We felt mixed emotions that day, but we are very grateful that he was born."
        />

        <Cards imageUrl={require("../images/babybump.jpg")} />

        <Title caption="We were supposed to have a virtual baby shower next month, but since Baby Harry was born earlier than his due date (December 19), we decided to create this website instead." />

        <Title title="Here's a quick update about him:" />

        <Cards imageUrl={require("../images/nursery.jpg")} />

        <Title caption="Since he was born prematurely, he still has to stay in the hospital, in an incubator, for at least six weeks. We can't wait to take him home but for now, he has to stay there." />

        <IconText
          Icon={ChildCareOutlinedIcon}
          text="We hope when everything goes back to normal and safe, we’d love to introduce Harry personally to everyone."
        />

        <Title
          title="Something For Baby Harry..."
          caption="We are grateful for your love, support, and prayers but if you desire to give him anything, we would appreciate monetary gifts for Baby Harry’s hospital bills."
        />
        <GradientButton
          Icon={FavoriteBorderOutlinedIcon}
          caption="Here are your options:"
        />

        <Cards
          // imageUrl={require("../images/bankarrow.png")}
          imageUrl1={require("../images/gcash.png")}
          imageUrl2={require("../images/paymaya.png")}
          imageUrl3={require("../images/coins.png")}
          imageUrl4={require("../images/landbank.png")}
          imageUrl5={require("../images/sb.png")}
          imageUrl6={require("../images/bpi.png")}
          imageUrl7={require("../images/paypal.png")}
          imageUrl8={require("../images/aub.png")}
        />
        <Title
          title="Our deepest gratitude"
          caption="All the support received from you will be spent solely on Harry's expenses."
        />
        <Title title="Thank you so much for all the love!" />
        <Title caption="Sincerely," />
        <Title caption="Jerome, Gel, and Baby Harry" />

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
