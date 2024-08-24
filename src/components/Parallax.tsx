import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface ParallaxProps {
  imageUrl: string; // URL de la imagen que se usará en el parallax
  height?: string; // Altura opcional para el contenedor de parallax
}

const Parallax: React.FC<ParallaxProps> = ({ imageUrl, height = "350px" }) => {
  return (
    <Box
      height={height}
      backgroundImage={`url(${imageUrl})`}
      backgroundAttachment="fixed" // Fija la imagen para el efecto parallax
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display="flex" // Usa flexbox para centrar el contenido
      alignItems="center" // Alinea verticalmente
      justifyContent="center" // Alinea horizontalmente
    >
      <Text
        fontSize="40px"
        fontStyle="italic"
        color="white"
        textShadow="1px 1px 2px black"
      >
        ¡Pide tu cita ahora!
      </Text>
    </Box>
  );
};

export default Parallax;
