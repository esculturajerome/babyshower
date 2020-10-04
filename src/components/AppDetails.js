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
          className={`appDetails__detail ${gifts?.length !== 0 && "colored"}`}
        >
          <Link to="/gifts">
            <IconButton>
              {/* <p className="appDetails__count">{gifts?.length}</p> */}
              <div className="appDetails__icon">
                <p className="appDetails__title">Send Your Gift</p>
              </div>
            </IconButton>
          </Link>
        </div>
        {/* <div
          className={`appDetails__detail ${carts?.length !== 0 && "colored"}`}
        >
          <Link to="/checkout">
            <IconButton>
              <div className="appDetails__icon">
                <p className="appDetails__title">Help us Financially</p>
              </div>
            </IconButton>
          </Link>
        </div> */}
      </animated.div>
    </AppDetailsWrapper>
  );
}

const AppDetailsWrapper = styled.div`
  .appDetails {
    display: flex;
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
  .MuiIconButton-root {
    background-color: #f1faf7;
    box-shadow: 0px 5px 10px #e4e9ec;
    margin-right: 5px;
  }
  .colored .MuiIconButton-label {
    background: -webkit-linear-gradient(90deg, #3f9da7 2.32%, #67dda0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default AppDetails;
