import NavBar from "../../components/nav/NavBar";
import { Hero } from "../../components/hero/Hero";
import { useTranslation } from "react-i18next";
import { Box } from "rebass/styled-components";
import BannerNav from "../../components/nav/BannerNav";

const Home = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Box>
      <NavBar />
      <BannerNav />
      <Hero title={t("homeScreen.description")} />
    </Box>
  );
};

export default Home;
