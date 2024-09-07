import { useEffect, useState, Suspense, lazy } from "react";
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Carga diferida de componentes
const Navbar = lazy(() => import("./components/Navbar"));
const NavCallToAction = lazy(() => import("./components/NavCallToAction"));
const MostReqServ = lazy(() => import("./components/MostReqServ"));
const ImagesToRef = lazy(() => import("./components/ImagesToRef"));
const Parallax = lazy(() => import("./components/Parallax"));
const CenteredText = lazy(() => import("./components/CenteredText"));
const Testimonials = lazy(() => import("./components/Testimonials"));

// Crear un componente Box animado
const MotionBox = motion(Box);

function App() {
  const [showCenteredText, setShowCenteredText] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Establece un temporizador para ocultar el texto después de 1.5 segundos
    const timer = setTimeout(() => {
      setShowCenteredText(false);
      setShowContent(true); // Mostrar contenido después de ocultar CenteredText
    }, 1500);

    // Limpia el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={null}>
      {" "}
      {/* Sin mensaje de carga */}
      {showCenteredText && <CenteredText />}
      {showContent && (
        <MotionBox
          initial={{ opacity: 0 }} // Comienza completamente transparente
          animate={{ opacity: 1 }} // Anima a completamente opaco
          transition={{ duration: 2 }} // Duración de la animación más corta
        >
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom="solid 1px"
            padding="0.2em"
            position="sticky" // Fijar el navbar en la parte superior
            zIndex="10000" // Asegúrate de que el z-index sea alto
            backgroundColor="white" // Fondo sólido para evitar la mezcla con el desenfoque
            top="0"
          >
            <NavCallToAction />
            <Navbar />
          </Box>
          <MostReqServ />
          <Parallax imageUrl="/pexels-kpaukshtite-3273490.jpg" />
          <ImagesToRef />
          <Testimonials />
          <Image
            alt="spa-de-uñas-pies"
            src="../public/waIcon.png"
            zIndex="999"
            position="sticky"
            bottom="3%"
            left="93%"
            width="60px"
            height="60px"
            cursor="pointer"
          />
        </MotionBox>
      )}
    </Suspense>
  );
}

export default App;
