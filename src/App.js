import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="home">
    <h2>Welcome to APTECH Solar Installation</h2>
    <p>Your partner for clean and sustainable solar solutions!</p>
  </div>
);

export default App;
