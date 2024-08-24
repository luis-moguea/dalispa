import { Box, Text } from "@chakra-ui/react";

const Navbar = () => {
  const navbarKeys = ["Inicio", "Servicios", "Nosotros"];

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
