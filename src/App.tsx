import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import JobFormPage from "./pages/JobFormPage/JobFormPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import MyProfilePage from "./pages/MyProfilePage/MyProfilePage";

function App(): JSX.Element {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jobs/:id" element={<DetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/my-profile" element={<MyProfilePage />} />
            <Route path="/jobs" element={<JobFormPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
