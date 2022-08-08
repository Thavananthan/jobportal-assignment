import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import Job from "./pages/job";
import Education from "./pages/education";
import User from "./pages/user";
import Application from "./pages/application";
import Table from "./pages/tabel";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />} exact />
        <Route path="/job" element={<Job />} exact />
        <Route path="/edu" element={<Education />} exact />
        <Route path="/user" element={<User />} exact />
        <Route path="/app" element={<Application />} exact />
        <Route path="/tab" element={<Table />} exact />
      </Routes>
    </div>
  );
}

export default App;
