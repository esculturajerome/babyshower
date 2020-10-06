import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import { useStateValue } from "../utils/StateProvider";
import Card from "./Card";

function Cards({
  Icon,
  imageUrl,
  imageUrl1,
  imageUrl2,
  imageUrl3,
  imageUrl4,
  imageUrl5,
  imageUrl6,
  imageUrl7,
}) {
  const anim = useSpring({
    from: { opacity: 0, marginTop: 50 },
    to: { opacity: 1, marginTop: 25 },
    delay: 300,
  });

  return (
    <CardsWrapper>
      <animated.div className="cards" style={anim}>
        {Icon && (
          <div className="cards__icon">
            <div>
              <Icon />
            </div>
            <div className="cards__iconLine"></div>
          </div>
        )}
        <div className="cards__list">
          {imageUrl && <Card imageUrl={imageUrl} />}
          {imageUrl1 && <Card imageUrl={imageUrl1} />}
          {imageUrl2 && <Card imageUrl={imageUrl2} />}
          {imageUrl3 && <Card imageUrl={imageUrl3} />}
          {imageUrl4 && <Card imageUrl={imageUrl4} />}
          {imageUrl5 && <Card imageUrl={imageUrl5} />}
          {imageUrl6 && <Card imageUrl={imageUrl6} />}
          {imageUrl7 && <Card imageUrl={imageUrl7} />}

          {/* {imageUrl.map(gift => (
          ))} */}

          {/* <Card imageUrl={require("../images/gcash.png")} />
            <Card imageUrl={require("../images/bpi.png")} /> */}
          {/* <Card message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum, odio in posuere efficitur, ipsum ipsum pharetra sem, eget feugiat velit lectus ac turpis" /> */}
        </div>
      </animated.div>
    </CardsWrapper>
  );
}

const CardsWrapper = styled.div`
  .cards {
    display: flex;
    margin-top: 25px;
  }
  .cards__icon {
    margin-top: 25px;
    margin-right: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .MuiSvgIcon-root {
    color: var(--secondaryColor) !important;
  }
  .cards__list {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    // padding: 25px;
    // padding-bottom: 0px;
  }
  .cards__list::-webkit-scrollbar {
    display: none;
  }
  .cards__iconLine {
    background: #e4ebf0;
    width: 2px;
    height: 80%;
    text-align: center;
  }
`;

export default Cards;
