import { Box, useMediaQuery, Text, Image } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {
  name?: string;
  image: string;
  alt: string;
  ml: string;
  description?: string;
  color?: string;
  link?: string;
}

const ReferencedImages = ({ image, name, alt, ml, link }: Props) => {
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
      bgColor="#373739"
      justifyContent="space-between"
      borderTopLeftRadius="25px"
      borderBottomRightRadius="25px"
      pb="28px"
      ml={ml}
      minW="300px"
      minH="360px"
      maxW="300px"
      maxH="360px"
      whileHover={{ scale: 1.05 }} // Añadir animación de zoom al hacer hover
      transition={{ duration: 0.3 }} // Duración de la animación
    >
      <Link
        to={link || "/"}
        style={{
          textDecoration: "none",
        }}
      >
        <Image src={image} style={imageStyle} alt={alt}></Image>
        <Box>
          <Text
            fontSize={isHigherThan480 ? "22px" : "16px"}
            color="#ffffff"
            fontStyle="italic"
            fontWeight="bold"
            textAlign="center"
            alignSelf="center"
            cursor="pointer"
            mb="0"
            mt="15px"
            pt="0"
          >
            {name}
          </Text>
        </Box>
      </Link>
    </MotionBox>
  );
};

export default ReferencedImages;
