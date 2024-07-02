import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./pages/signup/signup";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Courses from "./pages/courses/courses";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
