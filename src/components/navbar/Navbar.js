import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  // given navlinks
  return (
    <div className="container-fluid">
      <div className="row">
        <ul class="navbar">
          <li className="col-sm-12 col-md-5" id="heading">
            PK Institute
          </li>
          <li className="col-sm-12 col-md-7 listElemt">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/mentor">
              Mentors
            </Link>
            <Link className="link" to="/student">
              Students
            </Link>
            <Link className="link" to="/assign-mentor">
              Assign Mentor
            </Link>
            <Link className="link" to="/change-mentor">
              Change Mentor
            </Link>
            <Link className="link" to="/find-by-mentor">
              Find by Mentor
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
