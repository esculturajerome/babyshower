import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { useStateValue } from "../utils/StateProvider";
import IconText from "./IconText";

import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

function Logout() {
  const [{ userInfo }, dispatch] = useStateValue();
  const handleLogut = () => {
    dispatch({
      type: "USER_SIGNIN",
      item: null,
    });
  };
  return (
    <LogoutWrapper>
      <div className="logout">
        <IconText
          Icon={ExitToAppOutlinedIcon}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum,
          odio in posuere efficitur, ipsum ipsum pharetra sem, eget feugiat
          velit lectus ac turpis."
        />

        <IconButton className="logout__btn" onClick={handleLogut}>
          <p>Logout?</p>
        </IconButton>
      </div>
    </LogoutWrapper>
  );
}

const LogoutWrapper = styled.div`
  .logout__btn {
    margin-left: 50px;
  }
  .MuiIconButton-root {
    background-color: #f1faf7;
    box-shadow: 0px 5px 10px #e4e9ec;
    margin-right: 5px;
  }
  .MuiIconButton-label {
    background: -webkit-linear-gradient(90deg, #3f9da7 2.32%, #67dda0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export default Logout;
