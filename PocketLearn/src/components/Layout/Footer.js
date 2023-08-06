import React from "react";
import "../Layout/LayoutStyles/FooterStyle.css";
import twitter from "../../images/icon/tt.png";
import logo from "../../images/icon/logo_vishal_02.png";
import gitHubImg from "../../images/icon/github.png";
import instaImg from "../../images/icon/insta.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerBody">
      <footer>
        <div className="home-footer-container">
          {" "}
          <div className="main-footer-container">
            <div className="description-container">
              <div data-v-3fa35a1e className="main-logo-container">
                <NavLink
                  data-v-3fa35a1e
                  to="/"
                  href="#"
                  style={{ textDecoration: "none" }}
                  aria-current="page"
                  className="logo nuxt-link-exact-active nuxt-link-active"
                >
                  <img
                    style={{
                      height: "3.5rem",
                      maxWidth: "inherit",
                      marginRight: "0.5rem",
                    }}
                    data-v-3fa35a1e
                    alt="logo"
                    src={logo}
                    className="main-logo"
                  />
                  PocketLearn
                </NavLink>
              </div>{" "}
              <div className="description">
                Educational experiences that transform lives in a community-led
                learning environment
              </div>
              <div className="socials" style={{ marginTop: "10px" }}>
                <NavLink
                  href="#"
                  to="https://www.linkedin.com/company/pocketlearnofficial/"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMjYxMTYgMjIuMDUwMlY4LjQ4ODQ0SDEuNzUzNVYyMi4wNTAySDYuMjYxMTZaTTQuMDA3OTEgNi42MzU3QzUuNTc5ODEgNi42MzU3IDYuNTU4MjQgNS41OTQzMSA2LjU1ODI0IDQuMjkyOTJDNi41Mjg5NiAyLjk2MjE5IDUuNTc5ODcgMS45NDk3MSA0LjAzNzc0IDEuOTQ5NzFDMi40OTU4NSAxLjk0OTcxIDEuNDg3NTUgMi45NjIyMSAxLjQ4NzU1IDQuMjkyOTJDMS40ODc1NSA1LjU5NDM3IDIuNDY1NzQgNi42MzU3IDMuOTc4NDggNi42MzU3SDQuMDA3NzdINC4wMDc5MVpNOC43NTYxMyAyMi4wNTAySDEzLjI2MzhWMTQuNDc2N0MxMy4yNjM4IDE0LjA3MTMgMTMuMjkzMSAxMy42NjY0IDEzLjQxMjEgMTMuMzc2N0MxMy43MzggMTIuNTY2OSAxNC40Nzk3IDExLjcyODEgMTUuNzI0OSAxMS43MjgxQzE3LjM1NiAxMS43MjgxIDE4LjAwODYgMTIuOTcxOCAxOC4wMDg2IDE0Ljc5NDlWMjIuMDUwMUgyMi41MTU5VjE0LjI3MzlDMjIuNTE1OSAxMC4xMDgzIDIwLjI5MjEgOC4xNzAwNSAxNy4zMjYzIDguMTcwMDVDMTQuODk0NiA4LjE3MDA1IDEzLjgyNjkgOS41MjkyOSAxMy4yMzM4IDEwLjQ1NTFIMTMuMjYzOVY4LjQ4ODE2SDguNzU2MjNDOC44MTUzOSA5Ljc2MDcyIDguNzU2MjMgMjIuMDQ5OSA4Ljc1NjIzIDIyLjA0OTlMOC43NTYxMyAyMi4wNTAyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                    alt="linkedin"
                  />
                </NavLink>{" "}
                <NavLink
                  href="#"
                  to="https://twitter.com/pocketlearnofc"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "none" }}
                >
                  <img src={twitter} alt="twitter" />
                </NavLink>{" "}
                <NavLink
                  href="#"
                  to="https://github.com/pocketlearnofficial"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "none", marginLeft: "2px" }}
                >
                  {/* <img src={gitHubImg} alt="instagram" /> */}
                  <i class="fab fa-github fa-xl" style={{ color: "white" }}></i>
                  {/* <i class="fa-brands fa-square-github"></i> */}
                </NavLink>
                <NavLink
                  href="#"
                  to="https://www.instagram.com/pocketlearnofficial/"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "none", marginLeft: "5px" }}
                >
                  <img src={instaImg} alt="instagram" />
                </NavLink>
              </div>
            </div>{" "}
            <div className="links-container">
              <div className="links">
                <NavLink
                  href="/"
                  aria-current="page"
                  className="item nuxt-link-exact-active nuxt-link-active"
                  style={{ textDecoration: "none" }}
                >
                  <div>Home</div>
                </NavLink>{" "}
                <NavLink
                  href="https://blog.airtribe.live/"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "none" }}
                  className="item"
                >
                  <div>Blog</div>
                </NavLink>{" "}
                <NavLink
                  href="https://angel.co/company/airtribe"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "none" }}
                  className="item"
                >
                  <div>Careers</div>
                </NavLink>{" "}
                <NavLink
                  href="https://airtribe.live/terms-conditions"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "none" }}
                  className="item"
                >
                  <div>Terms &amp; Conditions</div>
                </NavLink>{" "}
                <NavLink
                  href="https://airtribe.live/privacy-policy"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "none" }}
                  className="item"
                >
                  <div>Privacy Policy</div>
                </NavLink>
              </div>{" "}
              <div className="links">
                <NavLink
                  href="https://airtribe.live/about-us"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "none" }}
                  className="item"
                >
                  <div>About Us</div>
                </NavLink>{" "}
                <NavLink
                  href="https://airtribe.live/contact-us"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "none" }}
                  className="item"
                >
                  <div>Contact Us</div>
                </NavLink>
              </div>
            </div>{" "}
            <div className="sign-up-container">
              <div className="message">
                Be the first in line to know about our latest courses
              </div>{" "}
              {/* <button className="sign-up">Sign up</button> */}
              <NavLink
                to="/login"
                className="btn sign-up"
                style={{ width: "108.7px" }}
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>{" "}
        <div data-v-a3f518b0 className="copyright-container">
          © 2023 PocketLearn Inc.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
