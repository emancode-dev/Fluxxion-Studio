import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/HomeComponents/NavBar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Features from "./pages/Features";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Careers from "./pages/Careers";
import Post from "./pages/Post";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import Process from './pages/Process'
const AnimatedRoutes = () => {
  const location = useLocation();

const AnimatedRoutes = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
        <Route path="/features" element={<Features />} />
        <Route path="/projects" element={<Projects />} />
    <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/process" element={<Process />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
