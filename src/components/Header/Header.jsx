import React from "react";

// IMAGES
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import downArrow from "../../assets/downArrow.png";

// CSS
import "./Header.css";

// calendar idea: https://www.section.io/engineering-education/build-react-calendar-library/
function Header() {
  return (
    <div className="header">
      {/* Month selector */}
      <div className="badge-container">
        <button className="transparent-button">
          <img src={leftArrow} alt="" className="arrow"></img>
        </button>
        <div className="badge-text"> Nov 2023</div>
        <button className="transparent-button">
          <img src={rightArrow} alt="" className="arrow"></img>
        </button>
      </div>

      {/* Unassigned money*/}
      <div className="badge-container unassigned-money-container">
        <div className="badge-text value-text">
          <div>145,26 lei</div>
          <div>Ready to assign</div>
        </div>
        <button className="assign-button badge-container">
          <div>Assign</div>
          <img src={downArrow} alt="" className="down-arrow"></img>
        </button>
      </div>
    </div>
  );
}

export default Header;
