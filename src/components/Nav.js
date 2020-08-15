import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Avatar } from "@material-ui/core";

function Nav() {
  const [hour, sethour] = useState(null);

  useEffect(() => {
    const unsubscribe = getHour();
    return () => {
      unsubscribe();
    };
  }, []);

  const getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    sethour(hour);
  };

  return (
    <NavWrapper>
      <header className="header">
        <div className="header__nav">
          <div className="header__avatar">
            <Avatar
              src="https://lh3.googleusercontent.com/ogw/ADGmqu-yU1CISEmk7nwURVI6aOwT2pH637UjGaQBOlU6=s32-c-mo"
              alt="jerome"
            />
          </div>
          <div className="header__greeting">
            <p className="header__greet">
              Good {hour < 12 ? "Morning" : hour < 18 ? "Afternoon" : "Evening"}
              ,
            </p>
            <p className="header__name">Jerome</p>
          </div>
        </div>
      </header>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  .header__nav {
    display: flex;
    align-items: center;
    margin: 75px 0 25px 25px;
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
`;

export default Nav;
