import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Tests from "../pages/Tests";
import Appointment from "../pages/Appointment";
import Contact from "../pages/Contact";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/tests" element={<Tests />} />
    <Route path="/appointment" element={<Appointment />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
