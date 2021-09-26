import React from "react";
import { Text, Box } from "rebass/styled-components";

interface ISubtitleTextProps {
  subtitle: string;
}

export const SubtitleText: React.FC<ISubtitleTextProps> = ({ subtitle }) => {
  return (
    <Box>
      <Text
        style={{
          color: "#F4EEEB",
          fontSize: "17px",
          fontWeight: 600,
          padding: "1rem",
          textTransform: "uppercase",
          alignSelf: "left",
        }}
      >
        {subtitle}
      </Text>
    </Box>
  );
};
