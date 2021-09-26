import React from "react";
import styled from "styled-components";
import { Text, Button } from "rebass/styled-components";

const ButtonBox = styled(Button)`
  padding: 1rem;
  border-radius: 34px;
  background-color: #a5e4ff;
  outline: none;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonTitle = styled(Text)`
  color: #292d47;
  font-size: 27px;
  font-weight: 600;
`;

interface IButtonProps {
  title?: string;
  onClick?: () => void;
  padding?: string;
}

export const GoButton: React.FC<IButtonProps> = ({
  title,
  onClick,
  padding,
}) => (
  <ButtonBox onClick={onClick}>
    <ButtonTitle p={padding}>{title}</ButtonTitle>
  </ButtonBox>
);
