import React from "react";
import styled from "styled-components";

import { Button } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

function WhiteButton({ Icon, item, lazadaUrl, shopeeUrl }) {
  const anim = useSpring({
    from: { opacity: 0, marginRight: -100, marginLeft: 100 },
    to: { opacity: 1, marginLeft: 0, marginRight: 0 },
    delay: 500,
  });
  return (
    <WhiteButtonWrapper>
      <animated.div style={anim}>
        <div className="whiteButton">
          <div className="whiteButton__icon">{Icon && <Icon />}</div>
          <div className="whiteButton__content">
            {item.imageUrl && (
              <img src={item.imageUrl} className="whiteButton__image" />
            )}
            <p className="whiteButton__text">{item.title}</p>
            <p className="whiteButton__caption">{item.caption}</p>
            {item.price && (
              <p className="whiteButton__price">
                Price: around P {item.price}.00
              </p>
            )}
            {item.lazadaUrl && item.shopeeUrl && (
              <div className="whiteButton__actions">
                <p className="whiteButton__links">Links: </p>
                {item.lazadaUrl && <Button onClick={lazadaUrl}>Lazada</Button>}
                {item.shopeeUrl && <Button onClick={shopeeUrl}>Shopee</Button>}
              </div>
            )}
          </div>
        </div>
      </animated.div>
    </WhiteButtonWrapper>
  );
}

const WhiteButtonWrapper = styled.div`
  .whiteButton {
    display: flex;
    margin-left: 0px;
    margin-bottom: 25px;
    justify-content: flex-start;
    width: fill-available;
    width: -webkit-fill-available;
    width: -moz-available;
    background: var(--white);
    border-radius: 15px 0 0 15px;
    padding: 25px;
    color: var(--secondaryColor);
  }
  .whiteButton__icon .MuiSvgIcon-root {
    color: ;
    margin-right: 25px;
  }
  .whiteButton__content {
    text-align: left;
  }
  .whiteButton__text {
    color: var(--primaryColor);
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: -0.3px;
  }
  .whiteButton__caption {
    margin-top: 5px;
    color: var(--secondaryColor);
    text-transform: capitalize;
  }
  .whiteButton__text .MuiSvgIcon-root {
    margin-bottom: -7px;
    margin-left: 10px;
  }
  .whiteButton__icon {
    align-self: center;
  }
  .whiteButton__actions {
    margin-top: 5px;
    display: flex;
    align-items: center;
  }
  .whiteButton__links {
    margin-right: 10px;
  }
  .whiteButton__price {
    margin-top: 10px;
  }
  .whiteButton__image {
    object-fit: contain;
    border-radius: 18px;
    height: 200px;
    margin-bottom: 10px;
  }
`;

export default WhiteButton;
