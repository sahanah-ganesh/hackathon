import React from "react";
import { Link } from "react-router-dom";
import { Box, Image } from "rebass/styled-components";
import Menu from "./Menu";
import SLogo from "../../assets/SLogo.svg";

const NavBar: React.FC = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#303246",
        padding: "1rem",
      }}
    >
      <Link to="/">
        <Image src={SLogo} />
      </Link>
      <Menu />
    </Box>
  );
};

export default NavBar;
