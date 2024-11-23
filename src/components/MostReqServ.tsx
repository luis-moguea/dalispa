import { useState } from "react"; // Importa useState
import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import { servicesData } from "../data/servicesData";
import ReqServices from "./ReqServices";
import ReqServices2 from "./ReqServices2";

const MostReqServ = () => {
  // Estado para controlar qué componente se muestra para cada índice
  const [activeComponents, setActiveComponents] = useState(
    Array(servicesData.length).fill(true) // Inicializa todos los elementos con true (ReqServices)
  );

  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  // Manejador de clic para alternar el componente en un índice específico
  const handleClick = (index: number) => {
    setActiveComponents(
      (prev) => prev.map((active, i) => (i === index ? !active : active)) // Alterna solo el índice clickeado
    );
  };

  return (
    <Box
      mt={isHigherThan480 ? "125px" : "115px"}
      maxW="100%"
      pl={isHigherThan480 ? "unset" : "0.4em"}
    >
      <Heading fontStyle="italic" textAlign="center">
        Nuestros Servicios
      </Heading>
      <Box
        width="100%"
        display="flex"
        mt="unset"
        padding={isHigherThan480 ? "40px" : "unset"}
        mb={isHigherThan480 ? "unset" : "40px"}
        pt="5px"
        overflowX="auto"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {servicesData.map((el, index) => {
          // Determina qué componente renderizar basado en el estado
          const ComponentToRender = activeComponents[index]
            ? ReqServices
            : ReqServices2;
          return (
            <Box
              key={index}
              onClick={() => handleClick(index)} // Manejador de clic para el índice específico
            >
              <ComponentToRender
                color={el.color}
                name={el.name}
                alt={el.alt}
                image={el.image}
                description={el.description}
                ml={index !== 0 ? "50px" : "unset"}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default MostReqServ;
