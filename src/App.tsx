import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import NavCallToAction from "./components/NavCallToAction";
import MostReqServ from "./components/MostReqServ";
import ImagesToRef from "./components/ImagesToRef";
import Parallax from "./components/Parallax";
import AllServices from "./components/AllServices";
import { servicesData } from "./data/servicesData";

function App() {
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <NavCallToAction />
        <Navbar />
      </Box>

      <MostReqServ />
      <Parallax imageUrl="../public/pexels-kpaukshtite-3273490.jpg" />
      <ImagesToRef />
      <AllServices services={servicesData} />
    </>
  );
}

export default App;
