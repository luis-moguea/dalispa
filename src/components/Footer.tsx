import {
  Box,
  Divider,
  Icon,
  Text,
  Link,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";
import { CSSProperties } from "react";
import logo from "/logo-dalispa.png";
import { CiInstagram } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const imageStyle: CSSProperties = {
    maxWidth: isHigherThan480 ? "195px" : "180px",
    minWidth: isHigherThan480 ? "195px" : "180px",
    minHeight: isHigherThan480 ? "170px" : "160px",
    maxHeight: isHigherThan480 ? "170px" : "160px",
    cursor: "pointer",
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgColor="#19191a"
      minH={isHigherThan480 ? "300px" : "280px"}
      flexDir="column"
      width="100%"
      maxW="100%"
      mt={isHigherThan480 ? "40px" : "unset"}
      p="unset"
      bottom="0"
      position="relative" // Asegúrate de que el contenedor del footer tenga position: relative
      zIndex="1"
    >
      <Box
        display="flex"
        flexDir={isHigherThan480 ? "unset" : "unset"}
        justifyContent={isHigherThan480 ? "unset" : "center"}
        alignItems={isHigherThan480 ? "unset" : "center"}
        padding={isHigherThan480 ? "40px" : "unset"}
        pb="0"
        pt="0"
      >
        <Image
          alt="spa-uñas-nail-semi-tradicional-manicure-manicura-pedicura-pedicure-deeppower"
          src={logo}
          style={imageStyle}
        />
        <Box
          display="flex"
          flexDir="column"
          padding={isHigherThan480 ? "50px" : "unset"}
        >
          <Box display="flex" alignItems="center">
            <Box display="flex">
              <Box
                mt={isHigherThan480 ? "unset" : "40px"}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Link href="https://wa.me/573008408237" isExternal>
                  <Icon
                    as={BsWhatsapp}
                    color="#25D366"
                    w={isHigherThan480 ? 30 : 46}
                    h={isHigherThan480 ? 30 : 46}
                    ml={isHigherThan480 ? "unset" : "30px"}
                    cursor="pointer"
                  ></Icon>
                </Link>
                <Link
                  href="https://www.instagram.com/dalispa_?igsh=N3dxZG5zbmt0dTB0"
                  isExternal
                >
                  <Icon
                    as={CiInstagram}
                    color="#E4405F"
                    ml={isHigherThan480 ? "5px" : "10px"}
                    w={isHigherThan480 ? 34 : 54}
                    h={isHigherThan480 ? 34 : 54}
                    cursor="pointer"
                  ></Icon>
                </Link>
              </Box>
            </Box>
          </Box>
          <Text
            fontStyle="italic"
            fontSize={isHigherThan480 ? "12px" : "14px"}
            color="#ffffff"
            textAlign={isHigherThan480 ? "left" : "center"}
            mr={isHigherThan480 ? "unset" : "10px"}
          >
            ¡Placer y belleza para tus manos y pies!
          </Text>
        </Box>
      </Box>
      <Box width={isHigherThan480 ? "60%" : "80%"}>
        <Divider
          sx={{
            boxShadow: "0 0 1px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Text mt="20px" fontSize="12px" color="#ffffff" textAlign="center">
          DaliSpa | Todos los derechos reservados &reg;
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
