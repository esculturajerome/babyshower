import React from "react";
import styled from "styled-components";

import { useLocation, Link } from "react-router-dom";

import { ReactComponent as LostBaby } from "../images/cryingbaby.svg";

import Title from "../components/Title";
import { IconButton } from "@material-ui/core";

function NoMatch() {
  let location = useLocation();

  return (
    <NoMatchWrapper>
      <div className="noMatch">
        <div className="noMatch__icon">
          <LostBaby className="nomatch__image" />
        </div>
        <div className="noMatch__text">
          <Title TItle="Page not found" caption={location.pathname} />
        </div>
        <Link to="/">
          <IconButton>
            <p>Back to Homepage</p>
          </IconButton>
        </Link>
      </div>
    </NoMatchWrapper>
  );
}

const NoMatchWrapper = styled.div`
  .noMatch {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .nomatch__image {
    width: 150px;
    height: 200px;
  }
`;

export default NoMatch;
