import "./App.css";
import AddReview from "./components/AddReview.jsx";
import Contact from "./components/Contact.jsx";
import HeroSection from "./components/HeroSection.js";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />

      <Contact />
      <AddReview />
    </div>
  );
}

export default App;
