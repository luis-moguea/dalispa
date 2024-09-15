import { Box, Image, Text, Heading } from "@chakra-ui/react";

interface Brands {
  name: string;

  image: string;
  description: string;
}

const Bcomp2 = ({ name, image, description }: Brands) => {
  return (
    <Box display="flex">
      <Box>
        <Heading>{name}</Heading>
        <Text fontStyle="italic">{description}</Text>
      </Box>
      <Image src={image} width="50px" />
    </Box>
  );
};

export default Bcomp2;
