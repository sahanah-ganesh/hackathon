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

export const SignupForm: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box as="form" onSubmit={(e) => e.preventDefault()} padding="1rem">
      <Box pb="4rem">
        <Box pb="2rem">
          <StyledLabel>{t("signup.email")}</StyledLabel>
          <StyledInput
            id="email"
            name="email"
            placeholder={t("signup.placeholderEmail")}
            type="email"
          />
        </Box>
        <Box pb="2rem">
          <Box
            backgroundColor="#BDDAFF"
            display="flex"
            flexDirection="row"
            style={{ borderRadius: "4px" }}
            padding="1rem"
          >
            <Image height="40px" width="40px" src={Security} />
            <Box display="flex" flexDirection="column" pl="1rem">
              <Text fontSize="14px">{t("signup.security")}</Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <StyledLabel>{t("signup.password")}</StyledLabel>
          <StyledInput id="password" name="password" type="password" />
        </Box>
      </Box>
    </Box>
  );
};
