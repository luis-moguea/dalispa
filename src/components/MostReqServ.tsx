import { useState } from "react"; // Importa useState
import { Box, Heading } from "@chakra-ui/react";
import { servicesData } from "../data/servicesData";
import ReqServices from "./ReqServices";
import ReqServices2 from "./ReqServices2";

const MostReqServ = () => {
  // Estado para controlar qué componente se muestra para cada índice
  const [activeComponents, setActiveComponents] = useState(
    Array(servicesData.length).fill(true) // Inicializa todos los elementos con true (ReqServices)
  );

  // Manejador de clic para alternar el componente en un índice específico
  const handleClick = (index: number) => {
    setActiveComponents(
      (prev) => prev.map((active, i) => (i === index ? !active : active)) // Alterna solo el índice clickeado
    );
  };

  return (
    <Box pt="113px">
      <Heading fontStyle="italic" textAlign="center">
        TODOS NUESTROS SERVICIOS
      </Heading>
      <Box
        width="100%"
        display="flex"
        mt="unset"
        padding="40px"
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
