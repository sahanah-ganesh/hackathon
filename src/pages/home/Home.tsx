import NavBar from "../../components/nav/NavBar";
import { Hero } from "../../components/hero/Hero";
import { Box } from "rebass/styled-components";
import BannerNav from "../../components/nav/BannerNav";

const Home = (): JSX.Element => {
  return (
    <Box height="100vh" style={{ position: "relative" }}>
      <NavBar />
      <BannerNav />
      <Hero />
    </Box>
  );
};

export default Home;
