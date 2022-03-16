import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import paths from "./paths/paths";
import JobFormPage from "./pages/JobFormPage/JobFormPage";

function App(): JSX.Element {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path={paths.postJob} element={<JobFormPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
