import React from "react";
import { Box, Image, Text } from "rebass/styled-components";
import { Label, Input } from "@rebass/forms/styled-components";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Security from "../../assets/Security.svg";

const StyledInput = styled(Input)`
  background-color: white;
  border-radius: 4px;
  padding: 1rem;
  color: black;
`;

const StyledLabel = styled(Label)`
  color: white;
  font-size: 20px;
  font-weight: 600;
  align-self: left;
  padding-bottom: 1rem;
`;

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box as="form" onSubmit={(e) => e.preventDefault()} padding="1rem">
      <Box pb="4rem">
        <Box pb="2rem">
          <StyledLabel>{t("login.nickname")}</StyledLabel>
          <StyledInput id="nickname" name="nickname" placeholder="Jane" />
        </Box>
        <Box>
          <StyledLabel>{t("login.postcode")}</StyledLabel>
          <StyledInput id="postcode" name="postcode" placeholder="3000" />
        </Box>
      </Box>
      <Box pb="2rem">
        <Box
          backgroundColor="#A8D4CC"
          display="flex"
          flexDirection="row"
          style={{ borderRadius: "4px" }}
          padding="1rem"
        >
          <Image height="40px" width="40px" src={Security} />
          <Box display="flex" flexDirection="column" pl="1rem">
            <Text fontSize="18px" fontWeight={600} pb="1rem">
              {t("login.securityTitle")}
            </Text>
            <Text fontSize="16px">{t("login.securityText")}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
