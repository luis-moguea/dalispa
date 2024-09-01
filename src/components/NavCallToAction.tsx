// src/components/NavCallToAction.tsx
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Crear un componente Text animado
const MotionText = motion(Text);
const MotionBox = motion(Box); // Creamos un componente animado para el contenedor

// Variantes para animar las letras
const typingAnimation = {
  hidden: { opacity: 0, y: -50 }, // Comienza invisible y desplazado hacia arriba
  visible: (i: number) => ({
    opacity: 1,
    y: 0, // Se mueve a la posición normal
    transition: {
      delay: i * 0.2, // Retraso para cada letra
      duration: 0.8, // Duración de la animación de cada letra
    },
  }),
};

// Variantes para el contenedor de texto
const containerAnimation = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0, // No añadir retraso antes de que los hijos comiencen a animarse
      staggerChildren: 0.2, // Retraso entre letras
    },
  },
};

const NavCallToAction = () => {
  const [animationKey, setAnimationKey] = useState(0); // Estado para forzar la reinicialización de la animación

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1); // Forzamos la reinicialización de la animación
    }, (text.length * 0.2 + 1) * 1000); // Ajustar el intervalo según la duración total de la animación

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  const text = "Quiero Mi Cita con DaliSpa!";

  return (
    <Box width="100%" display="flex" gap="200px" alignItems="center">
      <Image
        src="/pngegg (3).png"
        width="100px"
        height="70px"
        _hover={{ cursor: "pointer" }}
      />
      <Box display="flex" alignItems="center" gap="15px">
        <Image
          src="/waIcon.png"
          width="50px"
          height="50px"
          _hover={{ cursor: "pointer" }}
        />
        <MotionBox
          key={animationKey} // Cambia la clave para reiniciar la animación
          display="flex"
          initial="hidden"
          animate="visible"
          variants={containerAnimation}
          transition={{
            duration: text.length * 0.2 + 1, // Duración total de la animación
          }}
        >
          {text.split("").map((char, index) => (
            <MotionText
              key={index}
              fontSize="20px"
              _hover={{ cursor: "pointer", color: "gray" }}
              custom={index}
              variants={typingAnimation}
            >
              {char === " " ? "\u00A0" : char}
            </MotionText>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
};

export default NavCallToAction;
