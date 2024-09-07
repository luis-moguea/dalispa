import React, { useState } from "react";
import { Box, Heading, Image, Text, Button, Flex } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

interface Testimonio {
  nombre: string;
  servicio: string;
  comentario: string;
  imagen: string;
}

const testimonios: Testimonio[] = [
  {
    nombre: "Juan Pérez",
    servicio: "Desarrollo Web",
    comentario: "Excelente servicio, muy profesional.",
    imagen: "https://via.placeholder.com/150",
  },
  {
    nombre: "Ana Gómez",
    servicio: "Diseño Gráfico",
    comentario: "Creatividad y calidad en cada proyecto.",
    imagen: "https://via.placeholder.com/150",
  },
  // Agrega más testimonios aquí
];

const Testimonios: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonios.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonios.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box textAlign="center" p={5}>
      <Heading as="h1" mb={5}>
        Lo que dice la gente
      </Heading>
      <Flex alignItems="center" justifyContent="center">
        <Button onClick={handlePrev} mr={2}>
          <ArrowLeftIcon />
        </Button>
        <Box>
          <Image
            borderRadius="full"
            boxSize="150px"
            src={testimonios[index].imagen}
            alt={testimonios[index].nombre}
            mb={4}
          />
          <Text fontWeight="bold">{testimonios[index].nombre}</Text>
          <Text>{testimonios[index].servicio}</Text>
          <Text mt={2}>"{testimonios[index].comentario}"</Text>
        </Box>
        <Button onClick={handleNext} ml={2}>
          <ArrowRightIcon />
        </Button>
      </Flex>
    </Box>
  );
};

export default Testimonios;
