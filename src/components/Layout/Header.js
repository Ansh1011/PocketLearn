import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Layout/LayoutStyles/HeaderStyle.css";
import logo from "../../images/icon/favicon.png";
import rightArrow from "../../images/icon/right-arrow.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark navbar-custom navbar-expand-lg ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" href="#" to="/">
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
          LearnEd
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link "
                aria-current="page"
                href="#"
                to="/programs"
              >
                Programs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="#" to="/success-stories">
                Success Stories
              </NavLink>
            </li>
            <NavDropdown title="UpSkill for free" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </ul>

          <button className="HeaderBtn " type="submit">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
