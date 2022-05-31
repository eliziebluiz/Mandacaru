import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import Portalegre from "../pages/portalegre";
import Martins from "../pages/martins";
import Apodi from "../pages/apodi";
import Patu from "../pages/patu";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/portalegre" element={<Portalegre />} />
      <Route path="/martins" element={<Martins />} />
      <Route path="/apodi" element={<Apodi />} />
      <Route path="/patu" element={<Patu />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
