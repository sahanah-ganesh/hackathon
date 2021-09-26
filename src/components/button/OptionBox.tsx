import React, { useState } from "react";
import styled from "styled-components";
import { Box, Button } from "rebass/styled-components";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const StyledBox = styled(Box)`
  padding: 2rem 1rem 3rem 1rem;
  background-color: rgba(135, 127, 151, 0.5);
  outline: none;
  width: 100%;
`;

const StyledButton = styled(Button)<{ last: boolean }>`
  color: black;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: ${({ last }) => (last ? "0" : "1rem")};
  text-align: left;
  border-radius: 7px;
  padding: 1rem;
  &:hover {
    text-decoration: underline;
    border: 2px black solid;
  }
`;

interface IButtonProps {
  title?: string;
  setOption?: any;
}

export const OptionBox: React.FC<IButtonProps> = ({ setOption }) => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const history = useHistory();

  const handleClick = (value: string) => {
    if (count === 1) {
      navigateAway();
    }
    setOption(value);
    setCount(count + 1);
  };

  const navigateAway = () => {
    history.push(`/signup`);
    return;
  };

  return (
    <StyledBox>
      <Box display="flex" flexDirection="row">
        <Box width="50%" display="flex" flexDirection="column" pr="1rem">
          <StyledButton
            onClick={() => handleClick(t("chat.none"))}
            last={false}
          >
            {t("chat.none")}
          </StyledButton>
          <StyledButton
            onClick={() => handleClick(t("chat.some"))}
            last={false}
          >
            {t("chat.some")}
          </StyledButton>
          <StyledButton onClick={() => handleClick(t("chat.most"))} last={true}>
            {t("chat.most")}
          </StyledButton>
        </Box>
        <Box width="50%" display="flex" flexDirection="column">
          <StyledButton onClick={() => handleClick(t("chat.bit"))} last={false}>
            {t("chat.bit")}
          </StyledButton>
          <StyledButton
            onClick={() => handleClick(t("chat.half"))}
            last={false}
          >
            {t("chat.half")}
          </StyledButton>
          <StyledButton onClick={() => handleClick(t("chat.all"))} last={true}>
            {t("chat.all")}
          </StyledButton>
        </Box>
      </Box>
    </StyledBox>
  );
};
