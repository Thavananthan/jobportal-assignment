import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import Job from "./pages/job";
import Education from "./pages/education";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />} exact />
        <Route path="/job" element={<Job />} exact />
        <Route path="/edu" element={<Education />} exact />
      </Routes>
    </div>
  );
}

export default App;
