import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/HomeComponents/NavBar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";



function App() {
  return (
    <Router>
      <Navbar />
      {/* Add padding top to offset navbar */}
      <div className="pt-[64px] min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
