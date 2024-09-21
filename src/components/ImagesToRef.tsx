import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import ReferencedImages from "./ReferencedImages";
import { shadowData } from "../data/shadowData";

const ImagesToRef = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <>
      <Box
        p={isHigherThan480 ? "1em" : "unset"}
        maxW="100%"
        pl={isHigherThan480 ? "unset" : "0.4em"}
      >
        <Heading textAlign="center" fontStyle="italic">
          GALERIA DE IMAGENES
        </Heading>
        <Box
          width="100%"
          display="flex"
          mt="unset"
          padding={isHigherThan480 ? "40px" : "unset"}
          pt="10px"
          pb={isHigherThan480 ? "unset" : "40px"}
          overflowX="auto"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {shadowData.map((el, index) => (
            <ReferencedImages
              key={index}
              alt={el.alt}
              image={el.image}
              name={el.name}
              ml={index !== 0 ? "50px" : "unset"}
              color={el.color}
              link={el.link}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ImagesToRef;
