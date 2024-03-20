import "./App.css";
import AddReview from "./components/AddReview.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contact />
      <AddReview/>
    </div>
  );
}

export default App;
