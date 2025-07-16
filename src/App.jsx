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
import GithubContributions from './pages/ProjectPages/GithubContributions.jsx';
import Contact from "./pages/Contact.jsx";
import Weather from "./pages/Weather.jsx";
import Home from "./pages/Home.jsx";
import Packages from "./pages/Packages.jsx";
import Layout from "./components/Layout.jsx";
import Footer from "./components/Footer.jsx";
import ProjectComponent from "./pages/ProjectPages/ProjectComponent";

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
          <Route path="/projects/:id" element={<><Layout /><ProjectComponent /></>} />
          <Route path="/packages" element={<><Layout /><Packages /></>} />
          <Route path="/contributions" element={<GithubContributions />} />
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
