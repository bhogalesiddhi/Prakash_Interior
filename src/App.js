import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddReview from "./components/AddReview.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Hero from "./components/Hero/Hero.jsx";
import NewNavbar from "./components/NewNavbar/NewNavbar.jsx";
import Services from "./components/Services.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/newNavbar" element={<NewNavbar/>}></Route>
          <Route path="/hero" element={<Hero/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
