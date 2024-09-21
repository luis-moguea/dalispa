import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarKeys = ["Inicio", "Marcas", "Nosotros"];
  const navbarLinks = ["/", "/brands", "/about"]; // Rutas correspondientes

  return (
    <Box display="flex" gap="15px" pr="3em">
      {navbarKeys.map((el, index) => (
        <Link
          to={navbarLinks[index]}
          key={index}
          style={{ textDecoration: "none" }}
        >
          <Box bgColor="#c9b977" borderRadius="8px">
            <Text
              p="0.3em"
              color="#19191a"
              fontSize="20px"
              _hover={{ cursor: "pointer", color: "#ffffff" }}
            >
              {el}
            </Text>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default Navbar;
