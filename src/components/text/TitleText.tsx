import React from "react";
import { Box, Text } from "rebass/styled-components";

interface ITitleTextProps {
  title: string;
  paddingTop?: string;
  paddingBottom?: string;
}

export const TitleText: React.FC<ITitleTextProps> = ({
  title,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <Box>
      <Text
        style={{
          color: "#F4EEEB",
          fontSize: "45px",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: paddingTop ? paddingTop : "1rem",
          paddingBottom: paddingBottom ? paddingBottom : "3rem",
        }}
      >
        {title}
      </Text>
    </Box>
  );
};
