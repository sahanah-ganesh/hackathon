import NavBar from "../../components/nav/NavBar";
import { Box } from "rebass/styled-components";
import BannerNav from "../../components/nav/BannerNav";
import { TitleText } from "../../components/text/TitleText";
import { useTranslation } from "react-i18next";
import { SignupForm } from "../../components/form/SignupForm";
import { ButtonBox } from "../../components/button/ButtonBox";

const Signup = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Box height="100vh" style={{ position: "relative" }}>
      <NavBar />
      <BannerNav />
      <TitleText title={t("signup.title")} paddingTop="3rem" />
      <SignupForm />
      <ButtonBox title={t("buttons.continue")} link="/potato" />
    </Box>
  );
};

export default Signup;
