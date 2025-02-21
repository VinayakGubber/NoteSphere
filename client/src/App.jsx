import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Search from "./pages/Search";
import About from "./pages/About";
import Upload from "./pages/Upload";
import Faq from "./pages/Faq";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/profile" element={<Profile />} />

          {/* <Route path="/login" element={<Home />} /> */}
          {/* <Route path="/signup" element={<Home />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
