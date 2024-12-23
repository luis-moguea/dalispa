// src/components/NavCallToAction.tsx
import { Box, Image, Text, Link, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

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
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1); // Forzamos la reinicialización de la animación
    }, (text.length * 0.2 + 1) * 1000); // Ajustar el intervalo según la duración total de la animación

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  const text = "Agendar Cita!";

  return (
    <Box
      width="100%"
      display="flex"
      gap={isHigherThan480 ? "200px" : "unset"}
      alignItems="center"
    >
      <RouterLink to="/">
        <Image
          src="/logo-dalispa.png"
          width={isHigherThan480 ? "95px" : "88px"}
          height={isHigherThan480 ? "85px" : "79px"}
          _hover={{ cursor: "pointer" }}
        />
      </RouterLink>

      <Box
        display="flex"
        ml={isHigherThan480 ? "unset" : "18px"}
        alignItems="center"
        gap="15px"
      >
        <Link href="https://wa.me/573008408237" isExternal>
          <Image
            src="/waIcon.png"
            width={isHigherThan480 ? "50px" : "35px"}
            height={isHigherThan480 ? "50px" : "35px"}
            _hover={{ cursor: "pointer" }}
          />
        </Link>
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
              color="#ffffff"
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
