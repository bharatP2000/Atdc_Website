import {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Appointments from './pages/Appointment';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Doctors from './pages/Doctors';
import CategoryServices from './pages/CategoryServices';

function App() {

  useEffect(() => {
      const setVwUnit = () => {
        const baseWidth = 1920; // Your Figma base
        const vw = window.innerWidth / baseWidth;
        document.documentElement.style.setProperty("--rpx", `${vw}`);
      };
  
      setVwUnit();
      window.addEventListener("resize", setVwUnit);
      return () => window.removeEventListener("resize", setVwUnit);
    }, []);

  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/category-services" element={<CategoryServices />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;