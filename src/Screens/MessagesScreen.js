import React from "react";
import styled from "styled-components";
import AppDetails from "../components/AppDetails";
import Title from "../components/Title";
import { useStateValue } from "../utils/StateProvider";

function MessagesScreen() {
  const [{ messages, userInfo }] = useStateValue();

  console.log(messages?.uid, "asdasd");

  return (
    <MessagesWrapper>
      <div className="messages">
        <AppDetails />
        {messages?.map(
          (msg) => msg.uid === userInfo?.uid && <Title title={msg.message} />
        )}
      </div>
    </MessagesWrapper>
  );
}

const MessagesWrapper = styled.div`
  .messages {
    padding: 75px 0 75px 35px;
    height: 100vh;
    background: linear-gradient(180deg, #ffc7a6 36.46%, #fb9c9d 100%);
  }
`;

export default MessagesScreen;
