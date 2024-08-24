import { Box, Heading } from "@chakra-ui/react";
import { servicesData } from "../data/servicesData";
import ReferencedImages from "./ReferencedImages";

const ImagesToRef = () => {
  return (
    <>
      <Box>
        <Heading>IMAGENES REFERENCIALES</Heading>
        <Box
          width="100%"
          display="flex"
          mt="unset"
          padding="40px"
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
              text={el.text}
              service={el.service}
              ml={index !== 0 ? "50px" : "unset"}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ImagesToRef;
