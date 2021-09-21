import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Dummy = styled.div`
  padding: 0.5em 0;
`;

const MessageContainer = styled.div`
  overflow-y: scroll;
  margin-bottom: 2em;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserMessage = styled.div`
  max-width: 400px;
  padding: 0.5em;
  border-radius: 17px;
  overflow-wrap: break-word;
  background: white;
  color: grey;
  align-self: flex-end;
`;

const BotMessage = styled.div`
  max-width: 400px;
  padding: 0.5em;
  border-radius: 17px;
  overflow-wrap: break-word;
  background: grey;
  color: white;
  align-self: flex-start;
`;

const Options = styled.div`
  background: white;
  display: flex;
  align-items: center;
`;

const Text = styled.p`
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

  console.log(messages);

  return (
    <MessageContainer ref={bodyRef}>
      {messages.map((chat) => (
        <MessageWrapper key={chat.message}>
          {chat.sender === "user" ? (
            <UserMessage key={chat.sender}>
              <Text>{chat.message}</Text>
            </UserMessage>
          ) : (
            <BotMessage key={chat.sender}>
              <Text>{chat.message}</Text>
            </BotMessage>
          )}
          {chat.options ? (
            <Options>
              {chat.options.map((option) => (
                <Text
                  onClick={(e) => props.optionClick(e)}
                  data-id={option}
                  key={option}
                >
                  {option}
                </Text>
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
