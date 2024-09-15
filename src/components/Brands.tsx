import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import NavCallToAction from "./NavCallToAction";
import Navbar from "./Navbar";
import Bcomp1 from "./Bcomp1";
import Bcomp2 from "./Bcomp2";
import { brandsData } from "../data/brandsData";

const Brands: React.FC = () => {
  return (
    <Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="0.2em"
        position="fixed"
        zIndex="10000"
        backgroundColor="white"
        top="0"
        boxShadow="0px 5px 15px rgba(0, 0, 0, 0.3)" // Sombra más intensa
      >
        <NavCallToAction />
        <Navbar />
      </Box>

      <Box
        mt="115px"
        display="flex"
        flexDir="column"
        justifyContent="center"
        textAlign="center"
        alignItems="center"
      >
        <Heading fontStyle="italic" textAlign="center">
          Nuestras Marcas
        </Heading>{" "}
        {/* Asegúrate de que el contenido no quede oculto bajo la navbar */}
        {brandsData.map((el, index) => (
          <Box key={index}>
            {index % 2 === 0 ? (
              <Bcomp1
                name={el.name}
                description={el.description}
                image={el.image}
              /> // Pasa el objeto de la marca como prop
            ) : (
              <Bcomp2
                name={el.name}
                description={el.description}
                image={el.image}
              /> // Pasa el objeto de la marca como prop
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Brands;
