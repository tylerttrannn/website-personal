import FrontPage from "./FrontPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPageMobile from "./FrontPageMobile";

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
        <Router>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/experience" element={<FrontPageMobile />} />
            <Route path="/projects" element={<FrontPage />} />
            <Route path="/resume" element={<FrontPage />} />
            <Route path="/mobile" element={<FrontPageMobile />} />

          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
