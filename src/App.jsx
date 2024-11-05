import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import ProjectOne from "./pages/ProjectPages/ProjectOne.jsx";
import InTech from "./pages/ProjectPages/InTech.jsx";
import SSS from "./pages/ProjectPages/SSS.jsx";
import WeatherApp from "./pages/ProjectPages/WeatherApp.jsx";
import GourmetGallery from "./pages/ProjectPages/GourmetGallery.jsx";
import Snake from "./pages/ProjectPages/Snake.jsx";
import SpookSpotters from "./pages/ProjectPages/SpookSpotters.jsx";
import Home from "./pages/Home.jsx";
import LayOut from "./components/LayOut.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route
          path="/about"
          element={
            <div>
              <LayOut />
              <AboutMe />
            </div>
          }
        />
        <Route
          path="/experience"
          element={
            <div>
              <LayOut />
              <Experience />
            </div>
          }
        />
        <Route
          path="/education"
          element={
            <div>
              <LayOut />
              <Education />
            </div>
          }
        />
        <Route
          path="/skills"
          element={
            <div>
              <LayOut />
              <Skills />
            </div>
          }
        />
        <Route
          path="/projects"
          element={
            <div>
              <LayOut />
              <Projects />
            </div>
          }
        />
        <Route
          path="/projects/GourmetGallery"
          element={
            <div>
              <LayOut />
              <GourmetGallery />
            </div>
          }
        />
        <Route
          path="/projects/Snake"
          element={
            <div>
              <LayOut />
              <Snake />
            </div>
          }
        />
        <Route
          path="/projects/SpookSpotters"
          element={
            <div>
              <LayOut />
              <SpookSpotters />
            </div>
          }
        />
        <Route
          path="/projects/SSS"
          element={
            <div>
              <LayOut />
              <SSS />
            </div>
          }
        />
        <Route
          path="/projects/WeatherApp"
          element={
            <div>
              <LayOut />
              <WeatherApp />
            </div>
          }
        />
        <Route
          path="/projects/InTechJobs"
          element={
            <div>
              <LayOut />
              <InTech />
            </div>
          }
        />
        <Route
          path="/projects/ProjectOne"
          element={
            <div>
              <LayOut />
              <ProjectOne />
            </div>
          }
        />

        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
