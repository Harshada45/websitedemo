import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" to="#">
          LOGO
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus">
                About Us
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to=""
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                What We Do?
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="">
                  SEO & Google Ads
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="">
                  ORM
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="">
                  Web Development
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-white bg-white my-2 my-sm-0"
              type="submit"
            >
              Enrolment
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
