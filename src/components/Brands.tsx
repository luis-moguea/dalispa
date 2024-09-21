import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import NavCallToAction from "./NavCallToAction";
import Navbar from "./Navbar";
import Bcomp1 from "./Bcomp1";
import Bcomp2 from "./Bcomp2";
import { brandsData } from "../data/brandsData";

const Brands: React.FC = () => {
  return (
    <Box minHeight="100vh" width="100%" bg="#c9b977">
      {" "}
      {/* Asegura que ocupe toda la pantalla */}
      {/* Navbar fija */}
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="0.2em"
        position="fixed"
        zIndex="10000"
        backgroundColor="#19191a"
        top="0"
        boxShadow="0px 5px 15px rgba(0, 0, 0, 0.3)" // Sombra más intensa
      >
        <NavCallToAction />
        <Navbar />
      </Box>
      {/* Contenido principal */}
      <Box
        mt="90px" // Asegura que el contenido no quede oculto bajo el navbar
        width="100%"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Heading fontStyle="italic" fontSize="40px" mb="1em">
          Nuestras Marcas
        </Heading>

        {brandsData.map((el, index) => (
          <Box key={index} width="100%" maxW="1200px" mb="2em">
            {" "}
            {/* Centrado y con un maxWidth */}
            {index % 2 === 0 ? (
              <Bcomp1
                name={el.name}
                description={el.description}
                image={el.image}
              />
            ) : (
              <Bcomp2
                name={el.name}
                description={el.description}
                image={el.image}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Brands;
