import React, { useEffect, useState } from "react";
import { Box, Heading, Image, Text, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

interface Testimonio {
  nombre: string;
  servicio: string;
  comentario: string;
  imagen: string;
}

const testimonios: Testimonio[] = [
  {
    nombre: "Giselle Perez",
    servicio: "Uñas Acrílicas",
    comentario:
      "Mi lugar favorito en el mundo, mi Ima hace un trabajo perfecto 😍. Les recomiendo mucho este lugar",
    imagen: "/blue-profile.png",
  },
  {
    nombre: "Viviana Gutierrez",
    servicio: "Press On",
    comentario:
      "Son súper especialistas en ponernos bellas y aumentar nuestra autoestima ❤️❤️ las súper recomiendo, las amo ❤️❤️❤️",
    imagen: "/blue-profile.png",
  },
  {
    nombre: "Adriana Maria Duque Tamayo",
    servicio: "Semipermanente",
    comentario:
      "Tienen un valor agregado que me encanta: hacen sentir al cliente como un familiar. Recomiendo este Spa, son muy profesionales.",
    imagen: "/blue-profile.png",
  },
  {
    nombre: "Jesica Ramos",
    servicio: "Tradicional",
    comentario:
      "La atención y los diseños que hacen son súper pulidos, me encantan.",
    imagen: "/blue-profile.png",
  },
  {
    nombre: "DJ Nayo Mz",
    servicio: "Forrado Acrílico",
    comentario: "La atención es increíble, 100% recomendados 🫶",
    imagen: "/blue-profile.png",
  },
  {
    nombre: "Ana Gabriela Lara",
    servicio: "Dip Powder",
    comentario: "Excelente atención ☺️",
    imagen: "/blue-profile.png",
  },
  {
    nombre: "Maria Adelaida Valencia Monsalve",
    servicio: "Semipermanente",
    comentario: "Muy buena la atención. Excelentes profesionales.",
    imagen: "/blue-profile.png",
  },
  {
    nombre: "Maraly Molina",
    servicio: "Tradicional",
    comentario:
      "Lo recomiendo 💯, realmente tiene todo lo que buscamos para el cuidado de nuestras uñas, tanto en calidad de servicio como un personal calificado.",
    imagen: "/blue-profile.png",
  },
  {
    nombre: "Barbara",
    servicio: "Semipermanente",
    comentario:
      "Excelente servicio, muy profesionales, delicadas y amables 🌟🌟🌟🌟🌟. Recomendado al 100% si quieres vivir una experiencia única y diferente 💅🏻✨️",
    imagen: "/blue-profile.png",
  },
  {
    nombre: "Luis",
    servicio: "Tradicional",
    comentario: "Muy buena atención, relajante, ¡recomendado!",
    imagen: "/blue-profile.png",
  },
];

const Testimonios: React.FC = () => {
  const [index, setIndex] = useState(0); // Índice actual del testimonio
  const [isVisible, setIsVisible] = useState(true); // Controla la visibilidad para las animaciones
  const [isPaused, setIsPaused] = useState(false); // Para controlar cuando el usuario interactúa

  // Función para avanzar al siguiente testimonio
  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === testimonios.length - 1 ? 0 : prevIndex + 1
      );
      setIsVisible(true);
    }, 300); // Tiempo de la animación
  };

  // Función para retroceder al testimonio anterior
  const handlePrev = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === 0 ? testimonios.length - 1 : prevIndex - 1
      );
      setIsVisible(true);
    }, 300);
  };

  // Controlar el avance automático solo si no está pausado
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 18000); // 18 segundos por testimonio
      return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
    }
  }, [isPaused, index]); // Dependencia de isPaused para pausar y reanudar

  // Pausar el ciclo automático cuando el usuario interactúa
  const pauseAutoplay = () => {
    setIsPaused(true);
    setTimeout(() => {
      setIsPaused(false); // Reanudar automáticamente después de 10 segundos
    }, 10000);
  };

  return (
    <Box textAlign="center" p="3.5em">
      <Heading mt="0" as="h1" mb={5} fontStyle="italic">
        Lo que dicen nuestros clientes...
      </Heading>
      <Flex alignItems="center" justifyContent="center">
        <ChevronLeftIcon
          boxSize={30}
          onClick={() => {
            handlePrev();
            pauseAutoplay();
          }}
          _hover={{ cursor: "pointer" }}
          marginRight="20px"
        />
        <Box
          display="flex"
          p="0.5em"
          pt="1em"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Image
            mr="20px"
            borderRadius="full"
            boxSize="50px"
            src={testimonios[index].imagen}
            alt={testimonios[index].nombre}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Box mt="-15px">
              <Text mb="-10px" fontWeight="bold">
                {testimonios[index].nombre}
              </Text>
              <Text mb="0" fontSize="15px" color="brown" textStyle="italic">
                {testimonios[index].servicio}
              </Text>
            </Box>
          </motion.div>
        </Box>
        <ChevronRightIcon
          boxSize={30}
          marginLeft="20px"
          onClick={() => {
            handleNext();
            pauseAutoplay();
          }}
          _hover={{ cursor: "pointer" }}
        />
      </Flex>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Text mt={2} fontStyle="italic" fontSize="11px">
          "{testimonios[index].comentario}"
        </Text>
      </motion.div>
    </Box>
  );
};

export default Testimonios;
