import { Box, useMediaQuery, Text, Image } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
  image: string;
  alt: string;
  ml: string;
  service: string;
}

const ReferencedImages = ({ image, text, alt, service, ml }: Props) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const imageStyle: CSSProperties = {
    width: "100%",
    minHeight: "300px",
    cursor: "pointer",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
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
      borderTopRightRadius="25px"
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
        <Box display="flex" justifyContent="flex-end">
          <Text
            fontSize={isHigherThan480 ? "14px" : "16px"}
            fontStyle="italic"
            fontWeight="bold"
            color="#5d5d5d"
            lineHeight="1.3"
            p={isHigherThan480 ? "20px 0 20px 0px" : "10px 0 10px 0px"}
            textAlign="right"
            mt="10px"
          >
            {text}
          </Text>
        </Box>
      </Box>
      <Text
        mt="15px"
        textAlign="right"
        fontWeight="bold"
        whiteSpace="nowrap"
        fontStyle="oblique"
      >
        {service}
      </Text>
    </MotionBox>
  );
};

export default ReferencedImages;
