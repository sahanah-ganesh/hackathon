import React, { useState, useEffect, useRef } from "react";
import { Box, Text, Image } from "rebass/styled-components";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Sarah from "../../assets/Sarah.svg";

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
  padding-bottom: 1rem;
`;

const UserMessage = styled(Box)`
  position: relative;
  padding: 1rem;
  border-radius: 17px;
  overflow-wrap: break-word;
  background: white;
  color: black;
  margin-left: 2rem;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 20%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: white;
    border-bottom: 0;
    border-right: 0;
    margin-left: -10px;
    margin-bottom: -20px;
  }
`;

const BotMessage = styled(Box)`
  position: relative;
  padding: 1em;
  margin-right: 2rem;
  border-radius: 17px;
  overflow-wrap: break-word;
  background-color: white;
  color: black;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 20%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: white;
    border-bottom: 0;
    border-left: 0;
    margin-left: -10px;
    margin-bottom: -20px;
  }
`;

const ChatText = styled(Text)`
  margin-right: 0.8em;
  border-radius: 17px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const StyledText = styled(Text)`
  color: #f4eeeb;
  font-size: 18px;
  font-weight: 600;
  padding: 1rem 1rem 1rem 1rem;
  text-transform: uppercase;
`;

interface Props {
  userResponse: string;
  botResponse: {
    message: string;
    sender: string;
  };
  sendUserResponse: string;
}

interface MessagesInfo {
  message: string;
  sender: string;
}

const Chats: React.FC<Props> = (props) => {
  const [messages, setMessages] = useState<MessagesInfo[]>([]);
  const dummyRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          message: t("chat.first"),
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
            <Box>
              <UserMessage key={chat.sender}>
                <ChatText>{chat.message}</ChatText>
              </UserMessage>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-end"
                pt="1rem"
              >
                <StyledText>{t("chat.you")}</StyledText>
              </Box>
            </Box>
          ) : (
            <Box>
              <BotMessage key={chat.sender}>
                <Text>{chat.message}</Text>
              </BotMessage>
              <Box display="flex" flexDirection="row" pt="2rem">
                <Image height="50px" width="50px" src={Sarah} />
                <StyledText>{t("chat.name")}</StyledText>
              </Box>
            </Box>
          )}
          <Dummy ref={dummyRef}></Dummy>
        </MessageWrapper>
      ))}
    </MessageContainer>
  );
};

export default Chats;
