import { useEffect, useState, Suspense, lazy } from "react";
import { Box, Image, Link, useMediaQuery } from "@chakra-ui/react";
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
const MapLocal = lazy(() => import("./components/MapLocal"));

// Crear un componente Box animado
const MotionBox = motion(Box);

function App() {
  const [showCenteredText, setShowCenteredText] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

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
              maxW="100%"
              display="flex"
              justifyContent={isHigherThan480 ? "space-between" : "unset"}
              alignItems="center"
              padding={isHigherThan480 ? "0.2em" : "unset"}
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
            <Parallax
              imageUrl="/acri1.jpg"
              height={isHigherThan480 ? "unset" : "350px"}
            />
            <ImagesToRef />
            <MapLocal />
            <Testimonials />

            <Footer />
            <Link href="https://wa.me/573008408237" isExternal>
              <Image
                alt="spa-de-uñas-pies"
                src="/waIcon.png"
                position="fixed" // Usa sticky aquí
                bottom="5%"
                left={isHigherThan480 ? "90%" : "75%"}
                width={isHigherThan480 ? "60px" : "80px"}
                height={isHigherThan480 ? "60px" : "80px"}
                zIndex="99999" // Asegúrate de que el zIndex sea alto
                cursor="pointer"
              />
            </Link>
          </MotionBox>
        </Box>
      )}
    </Suspense>
  );
}

export default App;
