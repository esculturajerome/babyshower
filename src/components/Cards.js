import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";

function Cards() {
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
            <img
              className="card__image"
              src="https://ph-test-11.slatic.net/p/971223ef85fc52d383364bf536619167.jpg_720x720q80.jpg_.webp"
            />
            <img
              className="card__image"
              src="https://cf.shopee.ph/file/b26306e57538a12c1f045e19ff7426bd"
            />
            <img
              className="card__image"
              src="https://cf.shopee.ph/file/c182f52533b10c0ba30749a1194fd9f8"
            />
            <img
              className="card__image"
              src="https://cf.shopee.ph/file/b26306e57538a12c1f045e19ff7426bd"
            />
            <img
              className="card__image"
              src="https://cf.shopee.ph/file/c182f52533b10c0ba30749a1194fd9f8"
            />
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
    margin-left: 25px;
    margin-top: 25px;
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
  }
  .card__list {
    display: inline-flex;
    padding: 10px;
    align-items: center;
    scrollbar-width: none;
  }
  .card__image {
    width: 225px;
    object-fit: contain;
    border-radius: 18px;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: transform 0.45s;
  }
  .card__image:hover {
    transform: scale(1.05);
  }
  .card__image.Large {
    width: 225px;
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
    position: fixed;
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
`;

export default Cards;
