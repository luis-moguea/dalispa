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
const Footer = lazy(() => import("./components/Footer"));

// Crear un componente Box animado
const MotionBox = motion(Box);

function App() {
  const [showCenteredText, setShowCenteredText] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCenteredText(false);
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={null}>
      {showCenteredText && <CenteredText />}
      {showContent && (
        <Box minHeight="100vh" position="relative">
          {" "}
          {/* Contenedor principal */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Box
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding="0.2em"
              position="fixed"
              zIndex="10000"
              backgroundColor="#19191a"
              top="0"
              boxShadow="0px 5px 15px rgba(0, 0, 0, 0.3)" // Sombra más intensa
            >
              <NavCallToAction />
              <Navbar />
            </Box>

            <MostReqServ />
            <Parallax imageUrl="/pexels-kpaukshtite-3273490.jpg" />
            <ImagesToRef />
            <Testimonials />

            <Footer />
            <Image
              alt="spa-de-uñas-pies"
              src="/waIcon.png"
              position="fixed" // Usa sticky aquí
              bottom="5%"
              left="90%"
              width="60px"
              height="60px"
              zIndex="99999" // Asegúrate de que el zIndex sea alto
              cursor="pointer"
            />
          </MotionBox>
        </Box>
      )}
    </Suspense>
  );
}

export default App;
