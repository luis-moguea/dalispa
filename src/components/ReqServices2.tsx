import { Box, useMediaQuery, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  name: string;
  image?: string;
  alt?: string;
  description: string;
  ml: string;
}

const ReqServices2 = ({ name, description, ml }: Props) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  // Usar el componente motion.div de Framer Motion
  const MotionBox = motion(Box);

  return (
    <MotionBox
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.5)"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      backgroundColor="white"
      borderTopLeftRadius="25px"
      borderTopRightRadius="25px"
      pb="28px"
      ml={ml}
      minW="300px"
      minH="380px"
      maxW="300px"
      maxH="380px"
      whileHover={{ scale: 1.05 }} // Añadir animación de zoom al hacer hover
      transition={{ duration: 0.3 }} // Duración de la animación
      _hover={{ cursor: "pointer" }}
    >
      <Box display="flex" flexDir="column">
        <Heading
          textAlign="center"
          p="0"
          m="8px"
          _hover={{ cursor: "pointer" }}
        >
          {name}
        </Heading>
        <Text
          alignSelf="center"
          fontSize={isHigherThan480 ? "14px" : "16px"}
          fontStyle="italic"
          fontWeight="bold"
          color="#5d5d5d"
          lineHeight="1.3"
          textAlign="left"
          mt="10px"
          p="1em"
        >
          {description}
        </Text>
      </Box>
    </MotionBox>
  );
};

export default ReqServices2;
