import { Box, Image, Text, Heading } from "@chakra-ui/react";

interface Brands {
  name: string;
  image: string;

  description: string;
}

const Bcomp1 = ({ name, image, description }: Brands) => {
  return (
    <Box
      gap="40px"
      w="100%"
      display="flex"
      alignItems="center"
      borderBottom="solid 1px #ecdda2"
      pb="0.8em"
    >
      <Image
        borderRadius="15px"
        minH="200px"
        minW="150px"
        maxH="200px"
        maxW="150px"
        src={image}
        width="50px"
        objectFit="contain"
      />
      <Box w="100%">
        <Heading fontStyle="italic" fontSize="30px">
          {name}
        </Heading>
        <Text textAlign="right" fontStyle="italic">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Bcomp1;
