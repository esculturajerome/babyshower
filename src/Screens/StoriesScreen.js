import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Message from "../components/Message";

import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import { useStateValue } from "../utils/StateProvider";

function StoriesScreen() {
  const [{ messages }] = useStateValue();

  const back = useSpring({
    from: { opacity: 0, marginLeft: 25 },
    to: { opacity: 1, marginLeft: 0 },
  });

  return (
    <MessagesWrapper>
      <div className="messagesList">
        <animated.div className="messages__back" style={back}>
          <Link to="/">
            <IconButton>
              <ArrowRightAltOutlinedIcon className="messages__backBtn" />
            </IconButton>
          </Link>
        </animated.div>
        {messages ? (
          <div className="messagesList__message">
            {messages.map((message) => (
              <Message
                message={message.message}
                name={message?.displayName}
                photo={message?.photoUrl}
              />
            ))}
          </div>
        ) : (
          <Message message="No Message yet" noArrow />
        )}
      </div>
    </MessagesWrapper>
  );
}

const MessagesWrapper = styled.div`
  .messagesList {
    position: relative;
    height: 100vh;
    overflow: scroll;
    scroll-snap-type: y mandatory;
  }
  .messagesList::-webkit-scrollbar {
    display: none;
  }
  .messagesList {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .messages__back {
    position: fixed;
    top: 50px;
    padding-left: 35px;
    z-index: 1;
  }
  .messages__backBtn {
    color: #fff;
    transform: rotate(180deg);
  }
`;

export default StoriesScreen;
