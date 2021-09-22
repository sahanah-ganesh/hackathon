import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "rebass/styled-components";
import { useTranslation } from "react-i18next";

const Links = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    color: #259fcd;
  }
`;

const LinkBox: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2em",
      }}
    >
      <Box mb={3}>
        <Links to="/help">{t("links.help")}</Links>
      </Box>
      <Box mb={3}>
        <Links to="/violence">{t("links.violence")}</Links>
      </Box>
      <Box mb={3}>
        <Links to="/how">{t("links.how")}</Links>
      </Box>
    </Box>
  );
};

export default LinkBox;
