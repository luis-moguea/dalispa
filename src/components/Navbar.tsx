import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

const Navbar = () => {
  const navbarKeys = ["Inicio", "Servicios", "Nosotros"];
  const [navActive, setNavActive] = useState(false);

  const handleNavState = () => {
    setNavActive(!navActive);
  };

  return (
    <>
      <Box display="flex" gap="15px">
        {navbarKeys.map((el, index) => (
          <Text key={index}>{el}</Text>
        ))}
      </Box>
    </>
  );
};

export default Navbar;
