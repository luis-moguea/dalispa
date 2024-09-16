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
          <Text
            color="#ffffff"
            fontSize="20px"
            _hover={{ cursor: "pointer", color: "gray" }}
          >
            {el}
          </Text>
        </Link>
      ))}
    </Box>
  );
};

export default Navbar;
