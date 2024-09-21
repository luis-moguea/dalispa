import React, { Suspense, lazy } from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import { pressData } from "../data/imagesData";

// Carga diferida de los componentes Navbar y NavCallToAction
const Navbar = lazy(() => import("./Navbar"));
const NavCallToAction = lazy(() => import("./NavCallToAction"));

const Press: React.FC = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");
  const renderImages = (images: string[]) => {
    return images.map((image, index) => {
      const isFirstTwo = index < 2;
      const isMoreThanTwo = images.length > 2;

      // Layout condicional basado en el número de imágenes
      const colSpan = isMoreThanTwo
        ? isFirstTwo
          ? 2
          : 1 // Las primeras dos imágenes ocuparán 2 columnas, el resto ocupará 1
        : 1; // Si hay solo dos imágenes, todas ocuparán 1 columna

      const rowSpan = isMoreThanTwo
        ? isFirstTwo
          ? 1
          : 2 // Las primeras dos imágenes ocuparán 1 fila, el resto 2
        : 1; // Si hay solo dos imágenes, todas ocuparán 1 fila

      return (
        <GridItem
          key={index}
          colSpan={colSpan}
          rowSpan={rowSpan}
          overflow="hidden"
          position="relative"
          _hover={{ transform: "scale(1.05)", transition: "0.3s" }} // Efecto hover
        >
          <Image
            src={image}
            objectFit="cover"
            w="100%"
            h="100%"
            borderRadius="15px" // Borde redondeado
            transition="transform 0.3s ease-in-out" // Suaviza la animación
          />
        </GridItem>
      );
    });
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
      <Box p="2em" mx="auto" px="4" mt="6em">
        <Heading textAlign="center">PRESS ON</Heading>
        <Grid
          objectFit="cover"
          templateColumns={
            pressData.length <= 2 ? "repeat(2, 1fr)" : "repeat(2, 1fr)" // 2 columnas si hay 2 imágenes, 3 si hay más
          }
          templateRows={
            pressData.length <= 2 ? "repeat(1, 400px)" : "repeat(4, 200px)" // 1 fila si hay 2 imágenes, 2 filas si hay más, ajustando la altura a 150px
          }
          gap={15} // Ajuste del espacio entre las imágenes
          p="2em"
          autoRows="150px" // Altura automática de las filas
        >
          {renderImages(pressData)}
        </Grid>
      </Box>
    </>
  );
};

export default Press;
