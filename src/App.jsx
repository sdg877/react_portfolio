import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from './Pages/AboutMe.jsx';
import Education from './Pages/Education.jsx';
import Home from './Pages/Home.jsx';
import Projects from './Pages/Projects.jsx';
import Skills from './Pages/Skills.jsx';
import ProjectOne from './Pages/ProjectPages/ProjectOne.jsx';
import InTech from './Pages/ProjectPages/InTech.jsx';
import SSS from './Pages/ProjectPages/SSS.jsx';
import WeatherApp from './Pages/ProjectPages/WeatherApp.jsx';
import GourmetGallery from './Pages/ProjectPages/GourmetGallery.jsx';
import Snake from './Pages/ProjectPages/Snake.jsx';
import SpookSpotters from './Pages/ProjectPages/SpookSpotters.jsx';


function App() {
  return (
    <div>
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
