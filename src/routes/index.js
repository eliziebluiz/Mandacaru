import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import Portalegre from "../pages/portalegre";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/portalegre" element={<Portalegre />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
