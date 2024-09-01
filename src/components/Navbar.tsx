import { Box, Text } from "@chakra-ui/react";

const Navbar = () => {
  const navbarKeys = ["Inicio", "Marcas", "Nosotros"];

  return (
    <>
      <Box display="flex" gap="15px" pr="3em">
        {navbarKeys.map((el, index) => (
          <Text
            fontSize="20px"
            key={index}
            _hover={{ cursor: "pointer", color: "gray" }}
          >
            {el}
          </Text>
        ))}
      </Box>
    </>
  );
};

export default Navbar;
