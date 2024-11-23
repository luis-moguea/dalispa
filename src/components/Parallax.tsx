import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { Box, Text } from "@chakra-ui/react";

interface CustomParallaxProps {
  image: string;
  height: string; // Altura personalizada
}

const CustomParallax: React.FC<CustomParallaxProps> = ({ image, height }) => {
  return (
    <ParallaxProvider>
      <Box position="relative" height={height} width="100%" overflow="hidden">
        {/* Efecto parallax con la imagen */}
        <Parallax translateY={[-60, 60]} style={{ height: "100%" }}>
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bgImage={`url(${image})`}
            bgPosition="center"
            bgSize="cover"
            zIndex={-1}
          />
        </Parallax>

        {/* Texto centrado */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color="white"
            textShadow="0 2px 5px rgba(0, 0, 0, 0.7)"
          >
            ¡Pidetu cita ahora!
          </Text>
        </Box>
      </Box>
    </ParallaxProvider>
  );
};

export default CustomParallax;
