import React from "react";
import { Box } from "rebass/styled-components";
import { useTranslation } from "react-i18next";
import NavIconText from "./NavIconText";
import QuickExit from "../../assets/QuickExit.svg";
import UrgentHelp from "../../assets/UrgentHelp.svg";

const BannerNav: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#303246",
        margin: 0,
        padding: 0,
        width: "100%",
      }}
    >
      <Box width="50%" backgroundColor="#A8D4CC">
        <NavIconText
          image={QuickExit}
          text={t("links.quickExit")}
          link={"https://www.google.com/"}
        />
      </Box>
      <Box width="50%" backgroundColor="#A197B4">
        <NavIconText
          image={UrgentHelp}
          text={t("links.needHelp")}
          link={t("links.urgentHelp")}
        />
      </Box>
    </Box>
  );
};

export default BannerNav;
