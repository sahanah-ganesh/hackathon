import NavBar from "../../components/nav/NavBar";
import { Box, Image, Text } from "rebass/styled-components";
import BannerNav from "../../components/nav/BannerNav";
import { TitleText } from "../../components/text/TitleText";
import { useTranslation } from "react-i18next";
import { ButtonBox } from "../../components/button/ButtonBox";
import Potato2 from "../../assets/Potato2.svg";
import styled from "styled-components";

const StyledText = styled(Text)`
  color: white;
  font-size: 20px;
  padding: 1rem;
  font-weight: 200;
`;

const Potato = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Box height="100vh" style={{ position: "relative" }}>
      <NavBar />
      <BannerNav />
      <TitleText
        title={t("potato.title")}
        paddingTop="3rem"
        paddingBottom="2rem"
      />
      <StyledText>{t("potato.text")}</StyledText>
      <Box display="flex" justifyContent="center">
        <Image src={Potato2} />
      </Box>
      <ButtonBox title={t("buttons.continue")} link="/" />
    </Box>
  );
};

export default Potato;
