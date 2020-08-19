import React from "react";
import styled from "styled-components";

import { IconButton } from "@material-ui/core";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import { useStateValue } from "../utils/StateProvider";

function AppDetails() {
  const [{ carts, messages, gifts }] = useStateValue();

  const textAnim = useSpring({
    from: { opacity: 0, marginBottom: -50, marginTop: 50 },
    to: { opacity: 1, marginBottom: 25, marginTop: 25 },
    delay: 200,
  });

  console.log(messages, "UID");

  return (
    <AppDetailsWrapper>
      <animated.div className="appDetails" style={textAnim}>
        <div
          className={`appDetails__detail ${
            messages?.length !== 0 && "colored"
          }`}
        >
          <Link to="/messages">
            <IconButton>
              <p className="appDetails__count">{messages.length}</p>
              <div className="appDetails__icon">
                <p className="appDetails__title">Messages</p>
              </div>
            </IconButton>
          </Link>
        </div>
        <div
          className={`appDetails__detail ${gifts?.length !== 0 && "colored"}`}
        >
          <Link to="/gifts">
            <IconButton>
              <p className="appDetails__count">{gifts?.length}</p>
              <div className="appDetails__icon">
                <p className="appDetails__title">Gifts</p>
              </div>
            </IconButton>
          </Link>
        </div>
        <div
          className={`appDetails__detail ${carts?.length !== 0 && "colored"}`}
        >
          <Link to="/checkout">
            <IconButton>
              <p className="appDetails__count">{carts?.length}</p>
              <div className="appDetails__icon">
                <p className="appDetails__title">Carts</p>
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
  .MuiIconButton-label {
    color: var(--secondaryColor);
  }
  .colored .MuiIconButton-label {
    color: var(--primaryColor);
  }
`;

export default AppDetails;
