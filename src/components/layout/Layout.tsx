import { Box } from "rebass/styled-components";
import { FooterNav } from "../../components/nav/FooterNav";
import NavBar from "../../components/nav/NavBar";
import ChatBot from "../../components/chatbot/ChatBot";
import { Hero } from "../../components/hero/Hero";
import { useTranslation } from "react-i18next";

const Layout = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <NavBar />
      <Hero title={t("homeScreen.description")} />
      <ChatBot />
      <FooterNav />
    </Box>
  );
};

export default Layout;
