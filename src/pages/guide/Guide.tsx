import NavBar from "../../components/nav/NavBar";
import { Box, Text, Image } from "rebass/styled-components";
import BannerNav from "../../components/nav/BannerNav";
import { useTranslation } from "react-i18next";
import { ButtonBox } from "../../components/button/ButtonBox";
import styled from "styled-components";
import Sarah from "../../assets/Sarah.svg";

const StyledTitle = styled(Text)`
  font-size: 40px;
  color: white;
  padding: 6rem 5rem 3rem 5rem;
  text-align: center;
`;

const StyledText = styled(Text)`
  font-size: 35px;
  color: white;
  padding: 4rem 5rem 3rem 5rem;
  text-align: center;
`;

const Guide = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Box height="100vh" style={{ position: "relative" }}>
      <NavBar />
      <BannerNav />
      <StyledTitle>{t("guide.sarah")}</StyledTitle>
      <Box display="flex" justifyContent="center">
        <Image height="150px" width="150px" src={Sarah} />
      </Box>
      <StyledText>{t("guide.text")}</StyledText>
      <ButtonBox title={t("buttons.continue")} link="/chat" />
    </Box>
  );
};

export default Guide;
