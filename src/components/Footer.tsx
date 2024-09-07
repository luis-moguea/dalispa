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
    maxWidth: isHigherThan480 ? "180px" : "120px",
    minHeight: isHigherThan480 ? "160px" : "120px",
    cursor: "pointer",
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgColor="white"
      minH={isHigherThan480 ? "300px" : "250px"}
      flexDir="column"
      width="100%"
      mt="40px"
      p={isHigherThan480 ? "unset" : "40px"}
      bottom="0"
      position="relative" // Asegúrate de que el contenedor del footer tenga position: relative
      zIndex="1"
    >
      <Box
        display="flex"
        flexDir={isHigherThan480 ? "unset" : "unset"}
        justifyContent={isHigherThan480 ? "unset" : "center"}
        alignItems={isHigherThan480 ? "unset" : "center"}
        padding="40px"
        pb="0"
        pt="0"
      >
        <Image
          alt="envios-internacional-ship-shipment-baratos-estados-unidos-rapidos"
          src={logo}
          style={imageStyle}
        />
        <Box
          display="flex"
          flexDir="column"
          padding={isHigherThan480 ? "50px" : "20px"}
        >
          <Box display="flex" alignItems="center">
            <Box display="flex">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Link href="https://wa.me/000" isExternal>
                  <Icon
                    as={BsWhatsapp}
                    color="#25D366"
                    w={10}
                    h={8}
                    cursor="pointer"
                  ></Icon>
                </Link>
                <Link href="" isExternal>
                  <Icon
                    as={CiInstagram}
                    color="#E4405F"
                    ml="5px"
                    w={12}
                    h={10}
                    cursor="pointer"
                  ></Icon>
                </Link>
              </Box>
            </Box>
          </Box>
          <Text
            fontStyle="italic"
            fontSize="12px"
            color="#000000"
            textAlign="left"
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
        <Text mt="20px" fontSize="12px" color="#000000" textAlign="center">
          DaliSpa | Todos los derechos reservados &reg;
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
