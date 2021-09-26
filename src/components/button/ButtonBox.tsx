import React from "react";
import styled from "styled-components";
import { Button } from "rebass/styled-components";
import { GoButton } from "../button/GoButton";

const StyledBox = styled(Button)`
  padding: 2rem 1rem 3rem 1rem;
  background-color: rgba(135, 127, 151, 0.5);
  outline: none;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

interface IButtonProps {
  title?: string;
}

export const ButtonBox: React.FC<IButtonProps> = ({ title }) => (
  <StyledBox>
    <GoButton title={title} />
  </StyledBox>
);
