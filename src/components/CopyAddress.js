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
`;

export default CopyAddress;
