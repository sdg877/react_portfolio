import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from './Pages/AboutMe.jsx';
import Education from './Pages/Education.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
