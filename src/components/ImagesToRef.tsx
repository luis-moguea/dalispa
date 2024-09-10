import { Box, Heading } from "@chakra-ui/react";
import { servicesData } from "../data/servicesData";
import ReferencedImages from "./ReferencedImages";

const ImagesToRef = () => {
  return (
    <>
      <Box p="1em">
        <Heading textAlign="center" fontStyle="italic">
          IMAGENES REFERENCIALES
        </Heading>
        <Box
          width="100%"
          display="flex"
          mt="unset"
          padding="40px"
          pt="10px"
          overflowX="auto"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {servicesData.map((el, index) => (
            <ReferencedImages
              key={index}
              alt={el.alt}
              image={el.image}
              name={el.name}
              ml={index !== 0 ? "50px" : "unset"}
              color={el.color}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ImagesToRef;
