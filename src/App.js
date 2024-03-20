import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Location from "./components/Location";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>heyyy</h1>
        <Link to="/location">
          <button>Location</button>
        </Link>
      </div>

      <Route path="/location" component={Location} />
    </Router>
  );
}

export default App;
