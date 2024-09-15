import { Box, Image, Text, Heading } from "@chakra-ui/react";

interface Brands {
  name: string;
  image: string;

  description: string;
}

const Bcomp1 = ({ name, image, description }: Brands) => {
  return (
    <Box display="flex">
      <Image src={image} width="50px" />
      <Box>
        <Heading>{name}</Heading>
        <Text fontStyle="italic">{description}</Text>
      </Box>
    </Box>
  );
};

export default Bcomp1;
