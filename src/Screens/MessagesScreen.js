import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Message from "../components/Message";

import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

function MessagesScreen() {
  const back = useSpring({
    from: { opacity: 0, marginLeft: 25 },
    to: { opacity: 1, marginLeft: 0 },
  });

  const [show, setshow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       setshow(true);
  //     } else setshow(false);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

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
        <div className="messagesList__message">
          <Message />
          <Message />
          <Message />
        </div>
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
    left: 35px;
    z-index: 1;
  }
  .messages__backBtn {
    color: #fff;
    transform: rotate(180deg);
  }
`;

export default MessagesScreen;
