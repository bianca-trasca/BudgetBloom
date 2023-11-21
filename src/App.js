import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home page/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
