import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import Portalegre from "../pages/portalegre";
import Martins from "../pages/martins";
import Apodi from "../pages/apodi";
import Patu from "../pages/patu";
import Encanto from "../pages/encanto";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/portalegre" element={<Portalegre />} />
      <Route path="/martins" element={<Martins />} />
      <Route path="/apodi" element={<Apodi />} />
      <Route path="/patu" element={<Patu />} />
      <Route path="/encanto" element={<Encanto />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
