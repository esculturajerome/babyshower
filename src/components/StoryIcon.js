import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function StoryIcon({ messageID, message, photoUrl }) {
  const storyAnim = useSpring({
    from: { opacity: 0, marginTop: 25 },
    to: { opacity: 1, marginTop: 10 },
    delay: 100,
  });
  return (
    <StoryWrapper>
      <animated.div style={storyAnim}>
        <Link to={`/story/${messageID}`}>
          <Avatar src={photoUrl} className="story__image" />
        </Link>
      </animated.div>
    </StoryWrapper>
  );
}

const StoryWrapper = styled.div`
  .story__image {
    margin-right: 15px;
    border: 2px solid;
    border-color: var(--thirdColor);
    cursor: pointer;
    transition: transform 0.45s;
  }
  .story__image:hover {
    transform: scale(1.1);
  }
`;

export default StoryIcon;
