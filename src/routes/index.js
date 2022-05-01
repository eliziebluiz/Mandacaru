import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
