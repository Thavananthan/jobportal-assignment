import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import Job from "./pages/job";
import Education from "./pages/education";
import EditUser from "./pages/user/edit";
import EducationEdit from "./pages/user/edu";
import ExperienceEdit from "./pages/user/exp";

import User from "./pages/user";
import Search from "./pages/search";

import Application from "./pages/application";
import Table from "./pages/tabel";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} exact />
        <Route path="/job" element={<Job />} exact />
        <Route path="/edu" element={<Education />} exact />
        <Route path="/user" element={<User />} exact />
        <Route path="/app" element={<Application />} exact />
        <Route path="/tab" element={<Table />} exact />
        <Route path="/userEdit" element={<EditUser />} exact />
        <Route path="/eduEdit" element={<EducationEdit />} exact />
        <Route path="/expEdit" element={<ExperienceEdit />} exact />
        <Route path="/search/:id" element={<Search />} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
