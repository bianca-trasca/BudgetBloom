import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./Sidebar.css";
import Logo from "../../assets/simpleLogo.png";
import HomeImage from "../../assets/home.png";
import SettingsImage from "../../assets/settings.png";
import BudgetsImage from "../../assets/budget.png";
import StatisticsImage from "../../assets/statistics.png";
import AccountsImage from "../../assets/accounts.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarHeader m-2">
        <img src={Logo} alt=""></img>
        <span className="headerTextContainer m-4">Bianca's budget</span>
      </div>

      <hr className="hr"></hr>

      <ul className="sidebar-options">
        <li className="sidebar-item">
          <Link to="/" className="sidebar-link">
            <img src={HomeImage} alt="" className="m-2"></img>
            <div className="m-2">Home</div>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/Settings" className="sidebar-link">
            <img src={SettingsImage} alt="" className="m-2"></img>
            <div className="m-2">Settings</div>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/Budgets" className="sidebar-link">
            <img src={BudgetsImage} alt="" className="m-2"></img>
            <div className="m-2">Budgets</div>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/Statistics" className="sidebar-link">
            <img src={StatisticsImage} alt="" className="m-2"></img>
            <div className="m-2">Statistics</div>
          </Link>
        </li>

        <hr className="hr"></hr>

        <li className="sidebar-item">
          <Link to="/Accounts" className="sidebar-link">
            <img src={AccountsImage} alt="" className="m-2"></img>
            <div className="m-2">Accounts</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
