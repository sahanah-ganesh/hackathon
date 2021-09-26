import React from "react";
import { Link } from "react-router-dom";
import { Box, Image } from "rebass/styled-components";
import Dandelion from "../../assets/Dandelion.svg";
import { GoButton } from "../button/GoButton";
import { useTranslation } from "react-i18next";
import { TitleText } from "../text/TitleText";
import { SubtitleText } from "../text/SubtitleText";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box
      style={{
        padding: "1rem",
        backgroundColor: "#303246",
      }}
    >
      <Box display="flex" flexDirection="column">
        <SubtitleText subtitle={t("home.betterFuture")} />
        <TitleText title={t("home.description")} />
        <Link to="/login" style={{ width: "100%" }}>
          <GoButton title={t("buttons.go")} />
        </Link>
        <Box pl={4} pt={3}>
          <Image src={Dandelion} />
        </Box>
      </Box>
    </Box>
  );
};
