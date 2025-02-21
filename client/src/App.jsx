import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Search from "./pages/Search";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />

          {/* <Route path="/faq" element={<Home />} /> */}
          {/* <Route path="/profile" element={<Home />} /> */}
          {/* <Route path="/login" element={<Home />} /> */}
          {/* <Route path="/signup" element={<Home />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
