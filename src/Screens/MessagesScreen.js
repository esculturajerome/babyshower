import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import AppDetails from "../components/AppDetails";
import Title from "../components/Title";
import { useStateValue } from "../utils/StateProvider";

function MessagesScreen() {
  const [{ messages, userInfo }] = useStateValue();

  console.log(messages?.uid, "asdasd");

  return (
    <MessagesWrapper>
      <div className="messages">
        <Nav back />
        <AppDetails />
        {messages?.map(
          (msg) => msg.uid === userInfo?.uid && <Title caption={msg.message} />
        )}
      </div>
    </MessagesWrapper>
  );
}

const MessagesWrapper = styled.div`
  .messages {
    margin: 75px 0 75px 35px;
  }
`;

export default MessagesScreen;
