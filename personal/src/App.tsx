import FrontPage from "./pages/FrontPage/FrontPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkPage from "./pages/WorkPage/workPage";
function App() {
  return (

    <div className="flex justify-center items-center h-screen w-full">
        <Router>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/experience" element={<WorkPage />} />
            <Route path="/projects" element={<FrontPage />} />
            <Route path="/resume" element={<FrontPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
