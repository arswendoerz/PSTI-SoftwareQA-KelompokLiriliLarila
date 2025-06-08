import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FrontendPage from "./pages/FrontEndPage";
import BackendPage from "./pages/BackEndPage";
import EndpointDetail from "./pages/EndpointsDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frontend" element={<FrontendPage />} />
        <Route path="/backend" element={<BackendPage />} />
        <Route path="/endpoint/:id" element={<EndpointDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
