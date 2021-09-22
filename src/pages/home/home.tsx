import { FooterNav } from "../../components/nav/FooterNav";
import NavBar from "../../components/nav/NavBar";
import { Hero } from "../../components/hero/Hero";
import { useTranslation } from "react-i18next";
import { Box } from "rebass/styled-components";

const Home = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <NavBar />
      <Hero title={t("homeScreen.description")} />
      <Box height="400px" />
      <FooterNav />
    </>
  );
};

export default Home;
