import React from "react";
import styled from "styled-components";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { IconButton } from "@material-ui/core";

function CopyAddress() {
  const handleCopy = () => {
    alert("copied");
  };
  return (
    <CopyWrapper>
      <div className="copy">
        <CopyToClipboard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum, odio in posuere efficitur, ipsum ipsum.">
          <IconButton onClick={handleCopy}>
            <p>Copy Address</p>
          </IconButton>
        </CopyToClipboard>
      </div>
    </CopyWrapper>
  );
}

const CopyWrapper = styled.div`
  .copy {
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

export default CopyAddress;
