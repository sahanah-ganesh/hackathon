import NavBar from "../../components/nav/NavBar";
import { Box, Text, Image } from "rebass/styled-components";
import BannerNav from "../../components/nav/BannerNav";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Logo from "../../assets/Logo.svg";

const StyledTitle = styled(Text)`
  font-size: 40px;
  color: white;
  padding: 3rem 1rem 1rem 1rem;
  text-align: center;
`;

const StyledText = styled(Text)`
  font-size: 20px;
  color: white;
  padding: 2rem 3rem 2rem 3rem;
  text-align: center;
`;

const Create = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Box height="100vh" style={{ position: "relative" }}>
      <NavBar />
      <BannerNav />
      <Box display="flex" justifyContent="center" pt="4rem">
        <Image src={Logo} />
      </Box>
      <StyledTitle>{t("create.title")}</StyledTitle>
      <StyledText>{t("create.text")}</StyledText>
    </Box>
  );
};

export default Create;
