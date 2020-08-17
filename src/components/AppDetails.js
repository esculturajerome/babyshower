import React, { useState } from "react";
import styled from "styled-components";

import { IconButton } from "@material-ui/core";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import { useStateValue } from "../utils/StateProvider";

function AppDetails() {
  const [{ cart }] = useStateValue();
  const [messagesCount, setmessagesCount] = useState(0);

  const textAnim = useSpring({
    from: { opacity: 0, marginBottom: -50, marginTop: 50 },
    to: { opacity: 1, marginBottom: 25, marginTop: 25 },
    delay: 200,
  });

  return (
    <AppDetailsWrapper>
      <animated.div className="appDetails" style={textAnim}>
        <div className={`appDetails__detail ${messagesCount && "colored"}`}>
          <IconButton>
            <p className="appDetails__count">{messagesCount}</p>
            <div className="appDetails__icon">
              <p className="appDetails__title">Messages</p>
            </div>
          </IconButton>
        </div>
        <div className={`appDetails__detail ${cart.length !== 0 && "colored"}`}>
          <Link to="/checkout">
            <IconButton>
              <p className="appDetails__count">{cart.length}</p>
              <div className="appDetails__icon">
                <p className="appDetails__title">Gifts</p>
              </div>
            </IconButton>
          </Link>
        </div>
      </animated.div>
    </AppDetailsWrapper>
  );
}

const AppDetailsWrapper = styled.div`
  .appDetails {
    display: flex;
    margin-left: -10px;
  }
  .appDetails__detail {
    display: flex;
    align-items: center;
    color: var(--secondaryColor);
  }
  .appDetails__count {
    font-size: 1rem;
    margin-right: 10px;
  }
  .appDetails__detail.colored {
    color: var(--primaryColor);
  }
  .MuiIconButton-root {
    border-radius: 15px;
    text-align: left;
    color: inherit;
  }
`;

export default AppDetails;
