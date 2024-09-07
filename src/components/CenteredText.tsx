import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Crea un componente Box animado
const MotionBox = motion(Box);

const CenteredText: React.FC = () => {
  return (
    <MotionBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="rgba(245, 245, 220, 0.8)"
      initial={{ opacity: 1 }} // Opacidad inicial
      animate={{ opacity: 0 }} // Opacidad final
      transition={{ duration: 1.2, delay: 1.2 }} // Duración y retraso de la animación
    >
      <Image
        src="/logo-dalispa.png" // Reemplaza con la ruta de tu imagen
        alt="spa-nails-unas-uñas-pedicura"
        width="150px"
        height="125px"
        boxSize="150px" // Ajusta el tamaño de la imagen según necesites
        objectFit="cover"
      />
    </MotionBox>
  );
};

export default CenteredText;
