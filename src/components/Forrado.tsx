import React, { Suspense, lazy } from "react";
import { Box, VStack, Image, Heading, useMediaQuery } from "@chakra-ui/react";
import { forraData } from "../data/imagesData";
import Footer from "./Footer";

// Carga diferida de los componentes Navbar y NavCallToAction
const Navbar = lazy(() => import("./Navbar"));
const NavCallToAction = lazy(() => import("./NavCallToAction"));

const Forrado: React.FC = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const renderImages = (images: string[]) => {
    return images.map((image, index) => (
      <Box
        key={index}
        overflow="hidden"
        position="relative"
        mb="15px" // Margen inferior entre imágenes
        _hover={{ transform: "scale(1.05)", transition: "0.3s" }} // Efecto hover
      >
        <Image
          src={image}
          objectFit="cover"
          w="100%"
          h="auto"
          borderRadius="15px" // Borde redondeado
          transition="transform 0.3s ease-in-out" // Suaviza la animación
        />
      </Box>
    ));
  };

  return (
    <>
      {/* Suspense para manejar la carga diferida del Navbar */}
      <Suspense fallback={null}>
        <Box
          width="100%"
          maxW="100%"
          display="flex"
          justifyContent={isHigherThan480 ? "space-between" : "unset"}
          alignItems="center"
          padding={isHigherThan480 ? "0.2em" : "unset"}
          position="fixed"
          zIndex="10000"
          backgroundColor="#19191a"
          top="0"
          boxShadow="0px 5px 15px rgba(0, 0, 0, 0.3)" // Sombra más intensa
        >
          <NavCallToAction />
          <Navbar />
        </Box>
      </Suspense>

      {/* Contenido principal con margen superior para no superponerse al Navbar */}
      <Box p="1.2em" mx="auto" px="4" mt="6em">
        <Heading textAlign="center" mb="1em">
          FORRADOS
        </Heading>
        <VStack spacing={5} align="stretch" p="2em">
          {renderImages(forraData)}
        </VStack>
      </Box>
      <Footer />
    </>
  );
};

export default Forrado;
