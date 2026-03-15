import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Background from "./pages/Background.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Weather from "./pages/Weather.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
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
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/background" element={<Background />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectComponent />} />
              <Route path="/services" element={<Services />} />
              <Route path="/down" element={<DownPage />} />
            </Routes>
          </Layout>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;