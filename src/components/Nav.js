import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Avatar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStateValue } from "../utils/StateProvider";

function Nav({ back }) {
  const [hour, sethour] = useState(null);

  const [{ userInfo }, dispatch] = useStateValue();

  useEffect(() => {
    getHour();
  }, []);

  const getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    sethour(hour);
  };

  const text = useSpring({
    from: { marginLeft: -50 },
    to: { marginLeft: 0 },
  });

  const arrow = useSpring({
    from: { marginLeft: 20 },
    to: { marginLeft: 0 },
  });

  const handleLogin = () => {
    dispatch({
      type: "USER_SIGNIN",
      item: {
        uid: "1",
        displayName: "Jerome",
        photoUrl:
          "https://lh3.googleusercontent.com/ogw/ADGmqu-yU1CISEmk7nwURVI6aOwT2pH637UjGaQBOlU6=s32-c-mo",
        uid: "111",
      },
    });
  };

  return (
    <NavWrapper>
      <header className="header">
        <div className="header__nav">
          {userInfo && (
            <animated.div className="header__avatar" style={arrow}>
              {back ? (
                <Link to="/">
                  <IconButton>
                    <ArrowRightAltIcon className="header__back" />
                  </IconButton>
                </Link>
              ) : (
                <Avatar src={userInfo?.photoUrl} alt={userInfo?.displayName} />
              )}
            </animated.div>
          )}
          <animated.div className="header__greeting" style={text}>
            <p className="header__greet">
              Good {hour < 12 ? "Morning" : hour < 18 ? "Afternoon" : "Evening"}
              {userInfo && ","}
            </p>
            {userInfo ? (
              <p className="header__name">{userInfo?.displayName}</p>
            ) : (
              <IconButton onClick={handleLogin}>
                <p>Login</p>
              </IconButton>
            )}
          </animated.div>
        </div>
      </header>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  .header__nav {
    display: flex;
    align-items: center;
  }
  .header__avatar {
    margin-right: 10px;
  }

  .header__greet {
    font-size: 1.2rem;
    color: var(--secondaryColor);
  }

  .header__name {
    font-size: 1.2rem;
    color: var(--primaryColor);
  }
  .header__back {
    transform: rotate(180deg);
  }
`;

export default Nav;
