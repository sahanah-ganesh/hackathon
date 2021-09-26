import { Box } from "rebass/styled-components";
import NavBar from "../../components/nav/NavBar";
import ChatBot from "../../components/chatbot/ChatBot";

const Chat = (): JSX.Element => {
  return (
    <Box m="1rem">
      <NavBar />
      <Box display="flex" justifyContent="center">
        <ChatBot />
      </Box>
    </Box>
  );
};

export default Chat;
