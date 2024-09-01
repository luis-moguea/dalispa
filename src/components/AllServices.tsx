import React from "react";
import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

interface Service {
  text: string; // Texto del testimonio
  image: string; // URL de la imagen
  alt: string; // Texto alternativo para la imagen
  service: string; // Nombre del servicio o autor del testimonio
}

interface AllServicesProps {
  services: Service[]; // Array de servicios con imagen, descripción, y texto de testimonio
}

const AllServices: React.FC<AllServicesProps> = ({ services }) => {
  return (
    <Box p="1em" textAlign="center">
      <Heading marginBottom={6}>TODOS NUESTROS SERVICIOS</Heading>
      <Grid
        p="1em"
        templateColumns={["1fr", "repeat(2, 1fr)"]} // Una columna en dispositivos pequeños, tres en dispositivos más grandes
        gap="20" // Espacio entre los elementos
        alignItems="center" // Centra los elementos en el eje vertical
      >
        {services.map((service, index) => (
          <GridItem
            key={index}
            textAlign="center"
            padding="0.5em"
            border="1px solid #e2e8f0"
            borderRadius="md"
          >
            <Image
              src={service.image}
              alt={service.alt}
              borderRadius="md"
              objectFit="cover"
              maxW="350px"
              maxH="200px"
              marginBottom={4}
            />
            <Text fontSize="lg" fontWeight="bold" color="gray.700">
              {service.service}
            </Text>
            <Text
              fontSize="md"
              color="gray.500"
              fontStyle="italic"
              marginTop={2}
            >
              {service.text}
            </Text>
          </GridItem>
        ))}
      </Grid>
      <Heading fontSize="55px" fontStyle="italic">
        ¡Y mucho más querida... Contactanos!
      </Heading>
    </Box>
  );
};

export default AllServices;
