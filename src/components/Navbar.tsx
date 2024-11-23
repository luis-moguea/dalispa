import {
  Box,
  Text,
  IconButton,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TbMenu2 } from "react-icons/tb"; // Usar el ícono de menú específico que mencionaste
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const navbarKeys = ["Inicio", "Marcas", "Nosotros"];
  const navbarLinks = ["/", "/brands", "/about"]; // Rutas correspondientes

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box
      display="flex"
      flexDir="column"
      pr={isHigherThan480 ? "3em" : "unset"}
      maxW={isHigherThan480 ? "unset" : "100%"}
    >
      {/* Menú hamburguesa para pantallas pequeñas */}
      {!isHigherThan480 ? (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          p="1em"
        >
          {/* Botón del menú hamburguesa con un estilo más moderno */}
          <Menu>
            <MenuButton
              borderRadius="10px"
              as={IconButton}
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              icon={<TbMenu2 fontSize="30px" color="#ffffff" />}
              bg="none"
              _active={{ bg: "rgba(255, 255, 255, 0.6)" }}
              size="lg"
              transition="all 0.3s ease"
            />
            <MenuList
              borderRadius="10px"
              w="110px"
              boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"
              gap="10px"
              p="0.7em"
            >
              {/* Elementos del menú */}
              {navbarKeys.map((el, index) => (
                <MenuItem key={index} borderRadius="10px">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={navbarLinks[index]}
                  >
                    <Text textAlign="center" color="#020202">
                      {el}
                    </Text>
                  </Link>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      ) : (
        /* Menú horizontal para pantallas grandes */
        <HStack spacing="15px">
          {navbarKeys.map((el, index) => (
            <Link
              to={navbarLinks[index]}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <Box
                bgColor="#c9b977"
                borderRadius="20px"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                _hover={{ bgColor: "#a88e4d" }}
                transition="background-color 0.3s ease, box-shadow 0.3s ease"
              >
                <Text
                  p="0.5em 1em"
                  color="#19191a"
                  fontSize="20px"
                  _hover={{ cursor: "pointer", color: "#ffffff" }}
                >
                  {el}
                </Text>
              </Box>
            </Link>
          ))}
        </HStack>
      )}
    </Box>
  );
};

export default Navbar;
