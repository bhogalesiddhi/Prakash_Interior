import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact.jsx";
import Home from "./components/Home.jsx";
import Hero from "./components/Hero/Hero.jsx";
import NewNavbar from "./components/NewNavbar/NewNavbar.jsx";
import Services from "./components/Services/Services.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Location from "./components/location/Location.jsx";

import AboutUs from "./components/AboutUs/AboutUs.jsx";
import StatsSection from "./components/StatsSection/StatsSection.jsx";

import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <NewNavbar />
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          
          <Route path="/aboutUs" element={<AboutUs/>}></Route>
          <Route path="/stats" element={<StatsSection/>}></Route>
          <Route path="/works" element={<FeaturedProjects/>}/>
          <Route></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//{
//   "name": "prakash_interior",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@mui/icons-material": "^5.15.14",
//     "@testing-library/jest-dom": "^5.17.0",
//     "@testing-library/react": "^13.4.0",
//     "@testing-library/user-event": "^13.5.0",
//     "axios": "^0.21.1",
//     "firebase": "^10.9.0",
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0",
//     "react-icons": "^5.0.1",
//     "react-router-dom": "^6.22.3",
//     "react-scripts": "5.0.1",
//     "styled-components": "^6.1.8",
//     "url": "^0.11.3",
//     "web-vitals": "^2.1.4"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   }
// }
