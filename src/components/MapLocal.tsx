import { Box } from "@chakra-ui/react";
import { CSSProperties } from "react";

const MapLocal = () => {
  const iframeStyle: CSSProperties = {
    border: 0,
    margin: "auto",
    alignSelf: "center",
  };

  return (
    <Box
      width="100%"
      display="flex"
      flexDir="column"
      mt="30px"
      justifyContent="center"
      alignItems="center"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.79146148195815!2d-75.56666704294068!3d6.219918357170847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44297b7cf91339%3A0xefca2367cfd6544f!2sDaliSpa!5e0!3m2!1ses!2sco!4v1732372342194!5m2!1ses!2sco"
        width="100%"
        height="350px"
        style={iframeStyle}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default MapLocal;
