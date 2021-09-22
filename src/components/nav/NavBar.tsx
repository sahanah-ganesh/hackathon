import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "rebass/styled-components";
import { useTranslation } from "react-i18next";
import BLogo from "../../assets/BLogo.svg";
import { useViewport } from "../../hooks/useViewport";
import Menu from "./Menu";

export const HomeLogo = styled.img.attrs({
  src: `${BLogo}`,
})`
  height: auto;
`;

const Links = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 2rem;
  font-size: 17px;
  &:hover {
    color: #259fcd;
  }
`;

const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 2rem;
  font-size: 17px;
  &:hover {
    color: #259fcd;
  }
`;

interface INavBarProps {
  home?: boolean;
}

const NavBar: React.FC<INavBarProps> = ({ home }) => {
  const { t } = useTranslation();
  const { width } = useViewport();
  const breakpoint = 900;
  return (
    <Box style={{ backgroundColor: "#303246" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          textAlign: "right",
          padding: "2em",
        }}
      >
        <Box>
          <Link to="/" style={{ padding: "1rem" }}>
            {home ? null : <HomeLogo />}
          </Link>
        </Box>
        {width > breakpoint ? (
          <Box>
            <ExternalLink target="_blank" href={t("links.urgentHelp")}>
              {t("links.help")}
            </ExternalLink>
            <ExternalLink target="_blank" href={t("links.familyViolence")}>
              {t("links.violence")}
            </ExternalLink>
            <Links to="/start">{t("links.start")}</Links>
          </Box>
        ) : (
          <Menu />
        )}
      </Box>
    </Box>
  );
};

export default NavBar;
