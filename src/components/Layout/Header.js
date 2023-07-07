import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Layout/LayoutStyles/HeaderStyle.css";
import logo from "../../images/icon/logo_vishal_02.png";
import rightArrow from "../../images/icon/right-arrow.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className=" navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#171421" }}
    >
      <NavLink className="navbar-brand" href="#" to="/">
        <img
          className="logoImg"
          src={logo}
          alt=""
          style={{
            height: "4rem",
            maxWidth: "inherit",
            marginRight: "0.5rem",
          }}
        />
        PocketLearn
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* For Projects  */}

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Projects
            </a>
            <ul className="dropdown-menu">
              <li className="nav-item dropend">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Data Science
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropend">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Big Data
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* FOR LIVE SESSIONS  */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Live Sessions
            </a>
            <ul className="dropdown-menu">
              <li className="nav-item dropend">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Data Science
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropend">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Big Data
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* For Recorded Sessions  */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Recorded Sessions
            </a>
            <ul className="dropdown-menu">
              <li className="nav-item dropend">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Data Science
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropend">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Big Data
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#" to="/success-stories">
              Success Stories
            </NavLink>
          </li>
        </ul>
        {/* <button className="HeaderBtn" type="submit">
          Get Started
        </button> */}
        <NavLink to="/login-register" className="HeaderBtn btn">
          Get Started
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;

{
  /* <NavLink className="navbar-brand" href="#" to="/">
  <img
    className="logoImg"
    src={logo}
    alt=""
    style={{
      height: "2.5rem",
      maxWidth: "inherit",
      marginRight: "0.5rem",
    }}
  />
  PocketLearn
</NavLink>; */
}

{
  /* <NavLink className="nav-link" href="#" to="/success-stories">
  Success Stories
</NavLink>

<NavLink
                className="nav-link "
                aria-current="page"
                href="#"
                to="/programs"
              >
                Programs
              </NavLink> */
}
