import { FooterNav } from "../../components/nav/FooterNav";
import { Box } from "rebass/styled-components";
import NavBar from "../../components/nav/NavBar";
import ChatBot from "../../components/chatbot/ChatBot";

const Chat = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <Box display="flex" justifyContent="center">
        <ChatBot />
      </Box>
      <FooterNav />
    </>
  );
};

export default Chat;
