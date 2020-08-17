import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { useStateValue } from "../utils/StateProvider";

function Logout() {
  const [dispatch] = useStateValue();
  const handleLogut = () => {
    alert("logout!");
  };
  return (
    <LogoutWrapper>
      <div className="logout">
        <p className="logout__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum,
          odio in posuere efficitur, ipsum ipsum pharetra sem, eget feugiat
          velit lectus ac turpis.
        </p>
        <IconButton className="logout__btn" onClick={handleLogut}>
          <p>Logout?</p>
        </IconButton>
      </div>
    </LogoutWrapper>
  );
}

const LogoutWrapper = styled.div`
  .logout__text {
    margin-right: 25px;
    padding-top: 100px;
    color: var(--secondaryColor);
  }
  .MuiIconButton-root {
    margin-top: 10px;
    margin-bottom: 100px;
    border-radius: 15px;
    text-align: left;
    margin-left: -10px;
  }
`;
export default Logout;
