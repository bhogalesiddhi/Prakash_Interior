import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Hero from "./components/Hero/Hero.jsx";
import NewNavbar from "./components/NewNavbar/NewNavbar.jsx";
import Services from "./components/Services/Services.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <NewNavbar />
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
