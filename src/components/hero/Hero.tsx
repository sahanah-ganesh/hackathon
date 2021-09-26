import React from "react";
import { Link } from "react-router-dom";
import { Text, Box, Image } from "rebass/styled-components";
import Dandelion from "../../assets/Dandelion.svg";
import { GoButton } from "../button/GoButton";
import { useTranslation } from "react-i18next";

interface ITitleTextProps {
  title: string;
}
export const Hero: React.FC<ITitleTextProps> = ({ title }) => {
  const { t } = useTranslation();
  return (
    <Box
      style={{
        padding: "1rem",
        backgroundColor: "#303246",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="100%">
          <Text
            style={{
              color: "#F4EEEB",
              fontSize: "56px",
              padding: "1rem",
            }}
          >
            {title}
          </Text>
        </Box>
        <Box width="100%">
          <Image src={Dandelion} />
        </Box>
        <Link to="/start" style={{ width: "100%" }}>
          <GoButton title={t("buttons.go")} />
        </Link>
      </Box>
    </Box>
  );
};
