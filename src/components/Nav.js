import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Avatar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

function Nav({ back }) {
  const [hour, sethour] = useState(null);

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

  return (
    <NavWrapper>
      <header className="header">
        <div className="header__nav">
          <animated.div className="header__avatar" style={arrow}>
            {back ? (
              <Link to="/">
                <IconButton>
                  <ArrowRightAltIcon className="header__back" />
                </IconButton>
              </Link>
            ) : (
              <Avatar
                src="https://lh3.googleusercontent.com/ogw/ADGmqu-yU1CISEmk7nwURVI6aOwT2pH637UjGaQBOlU6=s32-c-mo"
                alt="jerome"
              />
            )}
          </animated.div>
          <animated.div className="header__greeting" style={text}>
            <p className="header__greet">
              Good {hour < 12 ? "Morning" : hour < 18 ? "Afternoon" : "Evening"}
              ,
            </p>
            <p className="header__name">Jerome</p>
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
    margin: 75px 0 25px 35px;
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
