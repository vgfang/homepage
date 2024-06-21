import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Router basename="/">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
