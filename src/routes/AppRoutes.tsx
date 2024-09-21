import { Route, Routes } from "react-router-dom";
import App from "../App";
import Brands from "../components/Brands";
import Semipermanente from "../components/Semipermanente";
import Press from "../components/Press";
import Tradicional from "../components/Tradicional";
import Dip from "../components/Dip";
import Forrado from "../components/Forrado";
import Acrilicas from "../components/Acrilicas";
import About from "../components/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="brands" element={<Brands />}></Route>
      <Route path="tradicional" element={<Tradicional />}></Route>
      <Route path="dip" element={<Dip />}></Route>
      <Route path="semi" element={<Semipermanente />}></Route>
      <Route path="forrado" element={<Forrado />}></Route>
      <Route path="press" element={<Press />}></Route>
      <Route path="acrilicas" element={<Acrilicas />}></Route>
      <Route path="about" element={<About />}></Route>
    </Routes>
  );
};

export default AppRoutes;
