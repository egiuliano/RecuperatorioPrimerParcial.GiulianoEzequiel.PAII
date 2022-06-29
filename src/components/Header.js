import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <img
            src="../nba-logoman-75.svg"
            alt="NBA"
            height="36"
          ></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Navigation></Navigation>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;