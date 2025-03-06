// import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import AboutMe from "./pages/AboutMe.jsx";
// import Education from "./pages/Education.jsx";
// import Experience from "./pages/Experience.jsx";
// import Projects from "./pages/Projects.jsx";
// import Skills from "./pages/Skills.jsx";
// import ProjectOne from "./pages/ProjectPages/ProjectOne.jsx";
// import InTech from "./pages/ProjectPages/InTech.jsx";
// import SSS from "./pages/ProjectPages/SSS.jsx";
// import HTreharneJones from "./pages/ProjectPages/HTreharneJones.jsx";
// import GourmetGallery from "./pages/ProjectPages/GourmetGallery.jsx";
// import Snake from "./pages/ProjectPages/Snake.jsx";
// import SpookSpotters from "./pages/ProjectPages/SpookSpotters.jsx";
// import Contact from "./pages/Contact.jsx";
// import Weather from "./pages/Weather.jsx";
// import Home from "./pages/Home.jsx";
// import Layout from "./components/Layout.jsx";
// import Footer from "./components/Footer.jsx";

// const App = () => {
//   return (
//     <div>
//       <div className="layout-wrapper">
//         <Routes>
//           <Route
//             path="/weather"
//             element={
//               <div>
//                 <Layout />
//                 <Weather />
//               </div>
//             }
//           />
//           <Route
//             path="/about"
//             element={
//               <div>
//                 <Layout />
//                 <AboutMe />
//               </div>
//             }
//           />
//           <Route
//             path="/contact"
//             element={
//               <div>
//                 <Layout />
//                 <Contact />
//               </div>
//             }
//           />
//           <Route
//             path="/experience"
//             element={
//               <div>
//                 <Layout />
//                 <Experience />
//               </div>
//             }
//           />
//           <Route
//             path="/education"
//             element={
//               <div>
//                 <Layout />
//                 <Education />
//               </div>
//             }
//           />
//           <Route
//             path="/skills"
//             element={
//               <div>
//                 <Layout />
//                 <Skills />
//               </div>
//             }
//           />
//           <Route
//             path="/projects"
//             element={
//               <div>
//                 <Layout />
//                 <Projects />
//               </div>
//             }
//           />
//           <Route
//             path="/projects/GourmetGallery"
//             element={
//               <div>
//                 <Layout />
//                 <GourmetGallery />
//               </div>
//             }
//           />
//           <Route
//             path="/projects/Snake"
//             element={
//               <div>
//                 <Layout />
//                 <Snake />
//               </div>
//             }
//           />
//           <Route
//             path="/projects/SpookSpotters"
//             element={
//               <div>
//                 <Layout />
//                 <SpookSpotters />
//               </div>
//             }
//           />
//           <Route
//             path="/projects/SSS"
//             element={
//               <div>
//                 <Layout />
//                 <SSS />
//               </div>
//             }
//           />
//           <Route
//             path="/projects/HTJ"
//             element={
//               <div>
//                 <Layout />
//                 <HTreharneJones />
//               </div>
//             }
//           />
//           <Route
//             path="/projects/InTechJobs"
//             element={
//               <div>
//                 <Layout />
//                 <InTech />
//               </div>
//             }
//           />
//           <Route
//             path="/projects/ProjectOne"
//             element={
//               <div>
//                 <Layout />
//                 <ProjectOne />
//               </div>
//             }
//           />
//           <Route
//             path="/"
//             element={
//               <div>
//                 <Layout />
//                 <Home />
//               </div>
//             }
//           />
//         </Routes>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// const WrappedApp = () => (
//   <Router>
//     <App />
//   </Router>
// );

// export default WrappedApp;


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
import Contact from "./pages/Contact.jsx";
import Weather from "./pages/Weather.jsx";
import Home from "./pages/Home.jsx";
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
          <Route path="/projects/GourmetGallery" element={<><Layout /><GourmetGallery /></>} />
          <Route path="/projects/Snake" element={<><Layout /><Snake /></>} />
          <Route path="/projects/SpookSpotters" element={<><Layout /><SpookSpotters /></>} />
          <Route path="/projects/SSS" element={<><Layout /><SSS /></>} />
          <Route path="/projects/HTJ" element={<><Layout /><HTreharneJones /></>} />
          <Route path="/projects/InTechJobs" element={<><Layout /><InTech /></>} />
          <Route path="/projects/ProjectOne" element={<><Layout /><ProjectOne /></>} />
        </Routes>
      </div>
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
