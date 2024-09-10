import { Box, useMediaQuery, Text, Image } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { motion } from "framer-motion";

interface Props {
  name?: string;
  image: string;
  alt: string;
  ml: string;
  description?: string;
  color: string;
}

const ReferencedImages = ({ image, name, alt, color, ml }: Props) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const imageStyle: CSSProperties = {
    width: "100%",
    minHeight: "300px",
    maxHeight: "300px",
    cursor: "pointer",
    borderTopLeftRadius: "25px",
    borderBottomRightRadius: "25px",
    objectFit: "cover",
  };

  // Usar el componente motion.div de Framer Motion
  const MotionBox = motion(Box);

  return (
    <MotionBox
      boxShadow="0px 4px 8px rgba(77, 20, 140, 0.5)"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      borderTopLeftRadius="25px"
      borderBottomRightRadius="25px"
      pb="28px"
      ml={ml}
      minW="300px"
      minH="400px"
      maxW="300px"
      maxH="400px"
      whileHover={{ scale: 1.05 }} // Añadir animación de zoom al hacer hover
      transition={{ duration: 0.3 }} // Duración de la animación
    >
      <Image src={image} style={imageStyle} alt={alt}></Image>
      <Box>
        <Text
          fontSize={isHigherThan480 ? "22px" : "16px"}
          color={color}
          fontStyle="italic"
          fontWeight="bold"
          textAlign="center"
          alignSelf="center"
          cursor="pointer"
        >
          {name}
        </Text>
      </Box>
    </MotionBox>
  );
};

export default ReferencedImages;
