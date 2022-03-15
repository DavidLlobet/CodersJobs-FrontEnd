import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import JobForm from "./components/JobForm/JobForm";

function App(): JSX.Element {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <JobForm />
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
