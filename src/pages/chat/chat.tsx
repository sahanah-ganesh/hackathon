import { useState } from "react";
import NavBar from "../../components/nav/NavBar";
import { Box, Text } from "rebass/styled-components";
import BannerNav from "../../components/nav/BannerNav";
import ChatBot from "../../components/chatbot/ChatBot";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { OptionBox } from "../../components/button/OptionBox";
import { BannerText } from "../../components/text/BannerText";

const StyledText = styled(Text)`
  color: #f4eeeb;
  font-size: 20px;
  font-weight: 600;
  padding: 3rem 1rem 0rem 1rem;
  text-transform: uppercase;
`;

const Chat = (): JSX.Element => {
  const { t } = useTranslation();
  const [option, setOption] = useState("");
  return (
    <Box height="100vh" style={{ position: "relative" }}>
      <NavBar />
      <BannerNav />
      <Box display="flex" justifyContent="center" pb="2rem">
        <BannerText text={t("chat.title")} />
      </Box>
      <ChatBot option={option} setOption={setOption} />
      <OptionBox setOption={setOption} title={t("buttons.continue")} />
    </Box>
  );
};

export default Chat;
