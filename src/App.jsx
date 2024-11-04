import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Home from './pages/Home.jsx';
import Education from './pages/Education.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import ProjectOne from './pages/ProjectPages/ProjectOne.jsx';
import InTech from './pages/ProjectPages/InTech.jsx';
import SSS from './pages/ProjectPages/SSS.jsx';
import WeatherApp from './pages/ProjectPages/WeatherApp.jsx';
import GourmetGallery from './pages/ProjectPages/GourmetGallery.jsx';
import Snake from './pages/ProjectPages/Snake.jsx';
import SpookSpotters from './pages/ProjectPages/SpookSpotters.jsx';

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/' && <NavBar />}

      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />

        <Route path="/projects/GourmetGallery" element={<GourmetGallery />} />
        <Route path="/projects/Snake" element={<Snake />} />
        <Route path="/projects/SpookSpotters" element={<SpookSpotters />} />
        <Route path="/projects/SSS" element={<SSS />} />
        <Route path="/projects/WeatherApp" element={<WeatherApp />} />
        <Route path="/projects/InTechJobs" element={<InTech />} />
        <Route path="/projects/ProjectOne" element={<ProjectOne />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
