import { Box, Image, Text, Heading, useMediaQuery } from "@chakra-ui/react";

interface Brands {
  name: string;

  image: string;
  description: string;
}

const Bcomp2 = ({ name, image, description }: Brands) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");
  return (
    <Box
      gap="40px"
      maxW="100%"
      display="flex"
      alignItems="center"
      borderBottom="solid 1px #ecdda2"
      pb="0.8em"
      p={isHigherThan480 ? "unset" : "2em"}
    >
      <Box w="100%">
        <Heading fontStyle="italic" fontSize="30px">
          {name}
        </Heading>
        <Text textAlign="left" fontStyle="italic">
          {description}
        </Text>
      </Box>
      <Image
        borderRadius="15px"
        minH="200px"
        minW="150px"
        maxH="120px"
        maxW="200px"
        src={image}
        width="50px"
        objectFit="contain"
      />
    </Box>
  );
};

export default Bcomp2;
