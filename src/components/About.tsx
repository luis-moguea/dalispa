import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
import NavCallToAction from "./NavCallToAction";

const About = () => {
  return (
    <>
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
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        textAlign="center"
        alignContent="center"
        mt="110px"
      >
        <Heading fontSize="40px">En Construcción...</Heading>
        <Text fontStyle="italic" fontSize="20px">
          Gracias por visitarnos
        </Text>
      </Box>
    </>
  );
};

export default About;
