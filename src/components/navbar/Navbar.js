import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="container">
        <nav>
          <h1>Moviez</h1>
          <div className="nav-list">
            <ul>
              <li>Movie</li>
              <li>Series</li>
              <li>Episodes</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
