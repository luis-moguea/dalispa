// src/App.tsx
import { useEffect, useState, Suspense, lazy } from "react";
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { servicesData } from "./data/servicesData";

// Carga diferida de componentes
const Navbar = lazy(() => import("./components/Navbar"));
const NavCallToAction = lazy(() => import("./components/NavCallToAction"));
const MostReqServ = lazy(() => import("./components/MostReqServ"));
const ImagesToRef = lazy(() => import("./components/ImagesToRef"));
const Parallax = lazy(() => import("./components/Parallax"));
const AllServices = lazy(() => import("./components/AllServices"));
const CenteredText = lazy(() => import("./components/CenteredText"));

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
            padding="1em"
            position="fixed"
            zIndex="9999"
            backgroundColor="white"
            top="0"
          >
            <NavCallToAction />
            <Navbar />
          </Box>
          <MostReqServ />
          <Parallax imageUrl="/pexels-kpaukshtite-3273490.jpg" />
          <ImagesToRef />
          <AllServices services={servicesData} />
          <Image
            alt="spa-de-uñas-pies"
            src="../public/waIcon.png"
            position="fixed"
            bottom="3%"
            right="3%"
            zIndex="999"
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
