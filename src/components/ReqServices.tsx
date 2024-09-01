import { Box, useMediaQuery, Text, Image, Heading } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { motion } from "framer-motion";

interface Props {
  name: string;
  image: string;
  alt?: string;
  description?: string;
  ml: string;
}

const ReqServices = ({ name, image, alt, ml }: Props) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const imageStyle: CSSProperties = {
    width: "100%",
    minHeight: "300px",
    cursor: "pointer",
    objectFit: "cover",
  };

  // Usar el componente motion.div de Framer Motion
  const MotionBox = motion(Box);

  return (
    <MotionBox
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.5)"
      y
      backgroundColor="white"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      textAlign="center"
      borderTopLeftRadius="25px"
      borderTopRightRadius="25px"
      pb="10px"
      ml={ml}
      minW="300px"
      minH="380px"
      maxW="300px"
      maxH="380px"
      whileHover={{ scale: 1.05 }} // Añadir animación de zoom al hacer hover
      transition={{ duration: 0.3 }} // Duración de la animación
    >
      <Heading p="0" m="8px" _hover={{ cursor: "pointer" }}>
        {name}
      </Heading>
      <Image src={image} style={imageStyle} alt={alt}></Image>
      <Box>
        <Text
          fontSize={isHigherThan480 ? "18px" : "16px"}
          fontStyle="italic"
          fontWeight="bold"
          textAlign="center"
          color="black"
          lineHeight="1.3"
          alignSelf="center"
          mt="10px"
          _hover={{ cursor: "pointer" }}
        >
          Haz click para saber más
        </Text>
      </Box>
    </MotionBox>
  );
};

export default ReqServices;
