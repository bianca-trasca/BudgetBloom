import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo}></img>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/Budgets">Budgets</Link>
        <Link to="/Statistics">Statistics</Link>
        <Link to="/Accounts">Accounts</Link>
        {/* <button className="button">
            <ReorderIcon />
          </button> */}
      </div>
    </div>
  );
}

export default Navbar;
