import React from "react";
import styled from "styled-components";
import StoryIcon from "./StoryIcon";
import { useStateValue } from "../utils/StateProvider";

function StoryRow() {
  const [{ messages }] = useStateValue();

  return (
    <StoryRowWrapper>
      <div className="story">
        {messages.map((message) => (
          <StoryIcon
            messageID={message.id}
            message={message.message}
            photoUrl={message.photoUrl}
          />
        ))}
      </div>
    </StoryRowWrapper>
  );
}

const StoryRowWrapper = styled.div`
  .story {
    margin: 10px 0;
    display: flex;
  }
`;
export default StoryRow;
