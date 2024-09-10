import { Route, Routes } from "react-router-dom";
import App from "../App";
import Brands from "../components/Brands";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="brands" element={<Brands />}></Route>
    </Routes>
  );
};

export default AppRoutes;
