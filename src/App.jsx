import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutMe from "./pages/AboutMe.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import ProjectOne from "./pages/ProjectPages/ProjectOne.jsx";
import InTech from "./pages/ProjectPages/InTech.jsx";
import SSS from "./pages/ProjectPages/SSS.jsx";
import HTreharneJones from "./pages/ProjectPages/HTreharneJones.jsx";
import GourmetGallery from "./pages/ProjectPages/GourmetGallery.jsx";
import Snake from "./pages/ProjectPages/Snake.jsx";
import SpookSpotters from "./pages/ProjectPages/SpookSpotters.jsx";
import AIChatBot from "./pages/ProjectPages/AIChatBot.jsx";
import Contact from "./pages/Contact.jsx";
import Weather from "./pages/Weather.jsx";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import Layout from "./components/Layout.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="layout-wrapper">
      <div className="content">
        <Routes>
          <Route path="/" element={<><Layout /><Home /></>} />
          <Route path="/weather" element={<><Layout /><Weather /></>} />
          <Route path="/about" element={<><Layout /><AboutMe /></>} />
          <Route path="/contact" element={<><Layout /><Contact /></>} />
          <Route path="/experience" element={<><Layout /><Experience /></>} />
          <Route path="/education" element={<><Layout /><Education /></>} />
          <Route path="/skills" element={<><Layout /><Skills /></>} />
          <Route path="/projects" element={<><Layout /><Projects /></>} />
          <Route path="/pricing" element={<><Layout /><Pricing /></>} />
          <Route path="/projects/GourmetGallery" element={<><Layout /><GourmetGallery /></>} />
          <Route path="/projects/Snake" element={<><Layout /><Snake /></>} />
          <Route path="/projects/SpookSpotters" element={<><Layout /><SpookSpotters /></>} />
          <Route path="/projects/SSS" element={<><Layout /><SSS /></>} />
          <Route path="/projects/HTJ" element={<><Layout /><HTreharneJones /></>} />
          <Route path="/projects/InTechJobs" element={<><Layout /><InTech /></>} />
          <Route path="/projects/ProjectOne" element={<><Layout /><ProjectOne /></>} />
          <Route path="/projects/AIChatBot" element={<><Layout /><AIChatBot /></>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
