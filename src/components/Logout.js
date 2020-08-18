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
`;
export default Logout;
