import NavBar from "../../components/nav/NavBar";
import { Box } from "rebass/styled-components";
import BannerNav from "../../components/nav/BannerNav";
import { TitleText } from "../../components/text/TitleText";
import { useTranslation } from "react-i18next";
import { LoginForm } from "../../components/form/LoginForm";
import { ButtonBox } from "../../components/button/ButtonBox";

const Login = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Box height="100vh" style={{ position: "relative" }}>
      <NavBar />
      <BannerNav />
      <TitleText title={t("login.welcome")} paddingTop="3rem" />
      <LoginForm />
      <ButtonBox title={t("buttons.continue")} />
    </Box>
  );
};

export default Login;
