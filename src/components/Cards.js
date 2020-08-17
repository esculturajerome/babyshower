import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../utils/StateProvider";

function Cards() {
  const [{ cards }] = useStateValue();

  const anim = useSpring({
    from: { marginRight: -100, marginLeft: 100 },
    to: { marginLeft: 0, marginRight: 0 },
  });

  return (
    <CardWrapper>
      <div className="card">
        <div className="card__icon">
          <div>
            <CardGiftcardOutlinedIcon />
          </div>
          <div className="card__iconLine"></div>
          <div className="card__iconTruck">
            <LocalShippingOutlinedIcon />
          </div>
        </div>
        <div className="card__listContainer">
          <animated.div className="card__list" style={anim}>
            <div className="card__item large">
              <img
                className="card__image"
                src="https://ph-test-11.slatic.net/p/971223ef85fc52d383364bf536619167.jpg_720x720q80.jpg_.webp"
              />
              <Avatar
                className="card__avatar"
                src="https://lh3.googleusercontent.com/ogw/ADGmqu-yU1CISEmk7nwURVI6aOwT2pH637UjGaQBOlU6=s32-c-mo"
                alt="j"
              />
            </div>
            <div className="card__item large">
              <img
                className="card__image"
                src="https://cf.shopee.ph/file/b26306e57538a12c1f045e19ff7426bd"
              />
              <Avatar
                className="card__avatar"
                src="https://lh3.googleusercontent.com/ogw/ADGmqu-yU1CISEmk7nwURVI6aOwT2pH637UjGaQBOlU6=s32-c-mo"
                alt="j"
              />
            </div>
            <div className="card__item large">
              <img
                className="card__image"
                src="https://cf.shopee.ph/file/c182f52533b10c0ba30749a1194fd9f8"
              />
              <Avatar
                className="card__avatar"
                src="https://lh3.googleusercontent.com/ogw/ADGmqu-yU1CISEmk7nwURVI6aOwT2pH637UjGaQBOlU6=s32-c-mo"
                alt="j"
              />
            </div>
          </animated.div>
          <div className="card__address">
            <p>
              Delay in ms before the animation starts. Also valid as a function
              for individual keys: key => delay
            </p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  .card {
    display: flex;
    margin-top: 25px;
    margin-bottom: 100px;
  }
  .card__icon {
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
  .card__listContainer {
    overflow-y: hidden;
    overflow-x: scroll;
    width: fill-available;
    width: -webkit-fill-available;
    width: -moz-available;
  }
  .card__list {
    display: inline-flex;
    padding: 10px;
    align-items: center;
    scrollbar-width: none;
  }
  .card__image {
    height: 200px;
    object-fit: contain;
    border-radius: 18px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .large .card__image {
    height: 300px;
  }
  .card__listContainer::-webkit-scrollbar {
    display: none;
  }

  .card__listContainer {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .card__address {
    margin-top: 25px;
    margin-left: 10px;
    color: var(--secondaryColor);
    position: absolute;
    max-width: 360px;
  }
  .card__iconLine {
    background: #e4ebf0;
    width: 2px;
    height: 60%;
    text-align: center;
  }
  .card__iconTruck {
    margin-bottom: -50px;
  }
  .card__item {
    transition: transform 0.45s;
  }
  .card__item:hover {
    transform: scale(1.05);
  }
  .card__avatar {
    margin-top: -60px;
    margin-left: 150px;
  }
  .large .card__avatar {
    margin-left: 250px;
  }
`;

export default Cards;
