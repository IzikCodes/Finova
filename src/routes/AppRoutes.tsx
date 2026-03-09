import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Terms from "../pages/Terms";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import FAQ from "../pages/FAQ";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
