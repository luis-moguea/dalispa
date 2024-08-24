import { Box, Heading } from "@chakra-ui/react";
import { servicesData } from "../data/servicesData";
import ReqServices from "./ReqServices";

const MostReqServ = () => {
  return (
    <>
      <Box>
        <Heading>SERVICIOS MÁS RESERVADOS</Heading>
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
            <ReqServices
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

export default MostReqServ;
