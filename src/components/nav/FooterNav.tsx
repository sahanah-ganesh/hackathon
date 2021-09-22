import React from "react";
import { Box, Image } from "rebass/styled-components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import FacebookLogo from "../../assets/FacebookLogo.svg";
import FooterLogo from "../../assets/FooterLogo.svg";
import { useViewport } from "../../hooks/useViewport";
import LinkBox from "./LinkBox";

const StyledBox = styled(Box)`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const LogoLink = styled(Link)`
  padding: 1rem;
`;

const Links = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 1rem;
  font-size: 17px;
  &:hover {
    color: #259fcd;
  }
`;

export const FacebookLogoImage = styled.img.attrs({
  src: `${FacebookLogo}`,
})`
  height: auto;
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const FooterNav: React.FC = () => {
  const { t } = useTranslation();
  const { width } = useViewport();
  const breakpoint = 800;

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <Box
      style={{
        padding: "2em",
        display: "flex",
        flexDirection: width > breakpoint ? "row" : "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      backgroundColor="#303246"
    >
      <Box>
        <LogoLink to="/">
          <StyledBox>
            <Image src={FooterLogo} />
          </StyledBox>
        </LogoLink>
      </Box>
      {width > breakpoint ? (
        <Box>
          <Links to="/">{t("links.home")}</Links>
          <Links to="/help">{t("links.help")}</Links>
          <Links to="/violence">{t("links.violence")}</Links>
          <Links to="/how">{t("links.how")}</Links>
        </Box>
      ) : (
        <LinkBox />
      )}
      <FacebookLogoImage
        onClick={() => {
          openInNewTab("https://www.facebook.com/boop.date");
        }}
      />
    </Box>
  );
};
