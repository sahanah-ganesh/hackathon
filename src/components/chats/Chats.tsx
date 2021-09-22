import React, { useState, useEffect, useRef } from "react";
import { Box, Text } from "rebass/styled-components";
import styled from "styled-components";

const Dummy = styled(Box)`
  padding: 0.5em 0;
`;

const MessageContainer = styled(Box)`
  overflow-y: scroll;
  margin-bottom: 2em;
`;

const MessageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const UserMessage = styled(Box)`
  max-width: 400px;
  padding: 0.5em;
  border-radius: 17px;
  overflow-wrap: break-word;
  background: white;
  color: grey;
  align-self: flex-end;
`;

const BotMessage = styled(Box)`
  max-width: 400px;
  padding: 0.5em;
  border-radius: 17px;
  overflow-wrap: break-word;
  background: grey;
  color: white;
  align-self: flex-start;
`;

const Options = styled(Box)`
  background: white;
  display: flex;
  align-items: center;
`;

const ChatText = styled(Text)`
  margin-right: 0.8em;
  border-radius: 17px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

interface Props {
  userResponse: string;
  botResponse: {
    purpose: string;
    message: string;
    options?: string[];
    sender: string;
  };
  sendUserResponse: string;
  optionClick: (ev: React.MouseEvent<HTMLElement>) => void;
}

interface MessagesInfo {
  purpose?: string;
  message: string;
  options?: string[];
  sender: string;
}

const Chats: React.FC<Props> = (props) => {
  const [messages, setMessages] = useState<MessagesInfo[]>([]);
  const dummyRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // stacking up messages
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          purpose: "introduction",
          message: "Hi what's your name?",
          sender: "bot",
        },
      ]);
    } else {
      let tempArray = [...messages];
      tempArray.push({ message: props.sendUserResponse, sender: "user" });
      setMessages(tempArray);

      setTimeout(() => {
        let temp2 = [...tempArray];
        temp2.push(props.botResponse);
        setMessages(temp2);
      }, 1000);
    }
    // eslint-disable-next-line
  }, [props.sendUserResponse, props.botResponse]);

  // enable autoscroll after each message
  useEffect(() => {
    if (dummyRef && dummyRef.current && bodyRef && bodyRef.current) {
      bodyRef.current.scrollTo({
        top: dummyRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <MessageContainer ref={bodyRef}>
      {messages.map((chat) => (
        <MessageWrapper key={chat.message}>
          {chat.sender === "user" ? (
            <UserMessage key={chat.sender}>
              <ChatText>{chat.message}</ChatText>
            </UserMessage>
          ) : (
            <BotMessage key={chat.sender}>
              <Text>{chat.message}</Text>
            </BotMessage>
          )}
          {chat.options ? (
            <Options>
              {chat.options.map((option) => (
                <ChatText
                  onClick={(e) => props.optionClick(e)}
                  data-id={option}
                  key={option}
                >
                  {option}
                </ChatText>
              ))}
            </Options>
          ) : null}
          <Dummy ref={dummyRef}></Dummy>
        </MessageWrapper>
      ))}
    </MessageContainer>
  );
};

export default Chats;
