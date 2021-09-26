import React from "react";
import { Text, Box } from "rebass/styled-components";
import styled from "styled-components";

const StyledText = styled(Text)`
  color: #f4eeeb;
  font-size: 20px;
  font-weight: 600;
  padding: 3rem 1rem 0rem 1rem;
  text-transform: uppercase;
`;

interface IBannerTextProps {
  text: string;
}

export const BannerText: React.FC<IBannerTextProps> = ({ text }) => {
  return (
    <Box>
      <StyledText>{text}</StyledText>
    </Box>
  );
};
