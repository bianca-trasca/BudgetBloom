// CSS
import "./App.css";

// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

// PAGES
import Settings from "./pages/Settings/Settings";
import Home from "./pages/Home/Home";
import Budgets from "./pages/Budgets/Budgets";
import Statistics from "./pages/Statistics/Statistics";
import Accounts from "./pages/Accounts/Accounts";

// OTHER
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
        <Sidebar />
        <div className="contentContainer">
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/Settings" exact Component={Settings} />
            <Route path="/Budgets" exact Component={Budgets} />
            <Route path="/Statistics" exact Component={Statistics} />
            <Route path="/Accounts" exact Component={Accounts} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
