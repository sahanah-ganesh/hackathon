import React from "react";
import { Text, Box, Image } from "rebass/styled-components";
import { useViewport } from "../../hooks/useViewport";
import HeroLogo from "../../assets/HeroLogo.svg";
import { GoButton } from "../button/GoButton";
import { useTranslation } from "react-i18next";

interface ITitleTextProps {
  title: string;
  text?: string;
  moreText?: string;
  whiteText?: boolean;
}
export const Hero: React.FC<ITitleTextProps> = ({
  title,
  text,
  moreText,
  whiteText = false,
}) => {
  const { t } = useTranslation();
  const { width } = useViewport();
  const breakpoint = 900;
  return (
    <Box
      style={{
        padding: "1rem 10rem 1rem 10rem",
        backgroundColor: "#303246",
      }}
    >
      <Box
        display="flex"
        flexDirection={width > breakpoint ? "row" : "column"}
        justifyContent="space-around"
        alignItems="center"
      >
        <Box width="50%">
          <Image src={HeroLogo} />
        </Box>
        <Box width="50%">
          <Text
            style={{
              color: "#F4EEEB",
              fontSize: "56px",
              padding: "1rem",
            }}
          >
            {title}
          </Text>
          <GoButton title={t("buttons.go")} />
        </Box>
      </Box>
      {text && (
        <Box
          style={{ padding: "1rem", display: "flex", justifyContent: "center" }}
        >
          <Box width={width > breakpoint && !whiteText ? "50%" : "100%"}>
            <Text
              style={{
                color: whiteText ? "white" : "#F4EEEB",
                fontSize: "17px",
                textAlign: "center",
                lineHeight: 2,
              }}
            >
              {text}
            </Text>
            {moreText && (
              <Text
                style={{
                  color: "#F4EEEB",
                  fontSize: "17px",
                  textAlign: "center",
                  lineHeight: 2,
                  paddingTop: "2rem",
                }}
              >
                {moreText}
              </Text>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};
