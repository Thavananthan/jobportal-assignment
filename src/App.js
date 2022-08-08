import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import Job from "./pages/job";
import Education from "./pages/education";
import User from "./pages/user";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />} exact />
        <Route path="/job" element={<Job />} exact />
        <Route path="/edu" element={<Education />} exact />
        <Route path="/user" element={<User />} exact />
      </Routes>
    </div>
  );
}

export default App;
