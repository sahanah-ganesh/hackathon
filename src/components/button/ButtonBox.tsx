import React from "react";
import styled from "styled-components";
import { Box } from "rebass/styled-components";
import { GoButton } from "../button/GoButton";
import { Link } from "react-router-dom";

const StyledBox = styled(Box)`
  padding: 2rem 1rem 3rem 1rem;
  background-color: rgba(135, 127, 151, 0.5);
  outline: none;
  width: 100%;
`;

interface IButtonProps {
  title?: string;
  link: string;
}

export const ButtonBox: React.FC<IButtonProps> = ({ title, link }) => {
  return (
    <StyledBox>
      <Link to={link}>
        <GoButton title={title} />
      </Link>
    </StyledBox>
  );
};
