import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box } from "rebass/styled-components";
import styled from "styled-components";
import Chats from "../chats/Chats";

const ChatContainer = styled(Box)`
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em;
  background-color: transparent;
`;

interface ResponseObject {
  message: string;
  sender: string;
}

interface IProps {
  option: string;
  setOption: any;
}

const ChatBot: React.FC<IProps> = ({ option, setOption }) => {
  const [userResponse, setUserResponse] = useState(option);
  const [botResponse, setBotResponse] = useState<ResponseObject>({
    message: "",
    sender: "bot",
  });
  const [sendUserResponse, setSendUserResponse] = useState<string>("");
  const { t } = useTranslation();

  useEffect(() => {
    if (option) {
      setOption("");
      setSendUserResponse(option);
      let res = t("chat.second");
      setBotResponse({ message: res, sender: "bot" });
      setTimeout(() => {
        setUserResponse("");
      }, 1000);
    }
    // eslint-disable-next-line
  }, [option]);

  return (
    <ChatContainer>
      <Chats
        userResponse={userResponse}
        botResponse={botResponse}
        sendUserResponse={sendUserResponse}
      />
    </ChatContainer>
  );
};

export default ChatBot;
