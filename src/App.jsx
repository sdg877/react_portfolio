import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Weather from "./pages/Weather.jsx";
import Home from "./pages/Home.jsx";
import Packages from "./pages/Packages.jsx";
import Layout from "./components/Layout.jsx";
import ProjectComponent from "./pages/ProjectPages/ProjectComponent";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import DownPage from "./components/DownPage.jsx";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="app">
          <Layout showWeather={true}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectComponent />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/down" element={<DownPage />} />
            </Routes>
          </Layout>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;