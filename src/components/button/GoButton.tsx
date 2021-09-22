import React from "react";
import styled from "styled-components";
import { Text, Button } from "rebass/styled-components";

const ButtonBox = styled(Button)`
  border-radius: 34px;
  background-color: #95b5dd;
  outline: none;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonTitle = styled(Text)`
  color: white;
  padding: 1rem;
  font-size: 17px;
  font-weight: 200;
`;

interface IButtonProps {
  title?: string;
  onClick?: () => void;
}

export const GoButton: React.FC<IButtonProps> = ({ title, onClick }) => (
  <ButtonBox onClick={onClick}>
    <ButtonTitle>{title}</ButtonTitle>
  </ButtonBox>
);
