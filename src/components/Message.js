import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

import { Avatar } from "@material-ui/core";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";

function Message() {
  const avatar = useSpring({
    from: { opacity: 0, marginTop: 100 },
    to: { opacity: 1, marginTop: 0 },
    delay: 100,
  });
  return (
    <MessageWrapper>
      <div className="message">
        <div className="message__container">
          <animated.div style={avatar}>
            <Avatar
              src="https://lh3.googleusercontent.com/ogw/ADGmqu-yU1CISEmk7nwURVI6aOwT2pH637UjGaQBOlU6=s32-c-mo"
              className="message__avatar"
            >
              J
            </Avatar>
          </animated.div>
          <p className="message__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum
            tempor massa in elementum. Phasellus semper felis ac risus gravida,
            eu scelerisque lorem commodo. Fusce malesuada, urna in lacinia
            imperdiet, urna arcu consequat neque, eu bibendum ex metus in
            tortor.
          </p>
          <p>Jerome Escultura</p>
          <ArrowRightAltOutlinedIcon className="message__arrow" />
        </div>
      </div>
    </MessageWrapper>
  );
}

const MessageWrapper = styled.div`
  .message {
    position: relative;
    scroll-snap-align: start;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(180deg, #ffc7a6 36.46%, #fb9c9d 100%);
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .message__container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 100px 50px 35px;
    color: #fff;
  }
  .message__text {
    font-size: 1.3rem;
    font-weight: 800;
  }
  .message__avatar {
    box-shadow: 0px 10px 5px rgba(192, 150, 136, 0.3),
      0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  .message__arrow {
    transform: rotate(90deg);
  }
`;

export default Message;
