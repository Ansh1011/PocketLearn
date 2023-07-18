import React from "react";
import "../Layout/LayoutStyles/FooterStyle.css";
import twitter from "../../images/icon/tt.png";
import logo from "../../images/icon/logo_vishal_02.png";
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
                <a
                  href="https://www.linkedin.com/company/airtribe/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMjYxMTYgMjIuMDUwMlY4LjQ4ODQ0SDEuNzUzNVYyMi4wNTAySDYuMjYxMTZaTTQuMDA3OTEgNi42MzU3QzUuNTc5ODEgNi42MzU3IDYuNTU4MjQgNS41OTQzMSA2LjU1ODI0IDQuMjkyOTJDNi41Mjg5NiAyLjk2MjE5IDUuNTc5ODcgMS45NDk3MSA0LjAzNzc0IDEuOTQ5NzFDMi40OTU4NSAxLjk0OTcxIDEuNDg3NTUgMi45NjIyMSAxLjQ4NzU1IDQuMjkyOTJDMS40ODc1NSA1LjU5NDM3IDIuNDY1NzQgNi42MzU3IDMuOTc4NDggNi42MzU3SDQuMDA3NzdINC4wMDc5MVpNOC43NTYxMyAyMi4wNTAySDEzLjI2MzhWMTQuNDc2N0MxMy4yNjM4IDE0LjA3MTMgMTMuMjkzMSAxMy42NjY0IDEzLjQxMjEgMTMuMzc2N0MxMy43MzggMTIuNTY2OSAxNC40Nzk3IDExLjcyODEgMTUuNzI0OSAxMS43MjgxQzE3LjM1NiAxMS43MjgxIDE4LjAwODYgMTIuOTcxOCAxOC4wMDg2IDE0Ljc5NDlWMjIuMDUwMUgyMi41MTU5VjE0LjI3MzlDMjIuNTE1OSAxMC4xMDgzIDIwLjI5MjEgOC4xNzAwNSAxNy4zMjYzIDguMTcwMDVDMTQuODk0NiA4LjE3MDA1IDEzLjgyNjkgOS41MjkyOSAxMy4yMzM4IDEwLjQ1NTFIMTMuMjYzOVY4LjQ4ODE2SDguNzU2MjNDOC44MTUzOSA5Ljc2MDcyIDguNzU2MjMgMjIuMDQ5OSA4Ljc1NjIzIDIyLjA0OTlMOC43NTYxMyAyMi4wNTAyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                    alt="linkedin"
                  />
                </a>{" "}
                <a
                  href="https://twitter.com/Airtribe_live"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={twitter} alt="twitter" />
                </a>{" "}
                <a
                  href="https://www.youtube.com/@airtribe"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjk5NDkgOS42Mzg5QzIzLjA0NDQgOC4xNTg0IDIyLjczMTUgNi42ODg5OCAyMi4wODU1IDUuMzY3MDdDMjEuNjQ3MiA0LjgyNDY2IDIxLjAzODkgNC40NTg2MiAyMC4zNjY2IDQuMzMyNzNDMTcuNTg1OSA0LjA3MTU5IDE0Ljc5MzYgMy45NjQ1NSAxMi4wMDE5IDQuMDEyMDhDOS4yMjAyNyAzLjk2MjM5IDYuNDM4MDkgNC4wNjU5NyAzLjY2NzEzIDQuMzIyMzlDMy4xMTkzIDQuNDI1NTMgMi42MTIzMiA0LjY5MTQ4IDIuMjA4MDUgNS4wODc4QzEuMzA4NjIgNS45NDYzIDEuMjA4NjggNy40MTUwNyAxLjEwODc1IDguNjU2MjhDMC45NjM3NTEgMTAuODg3OSAwLjk2Mzc1MSAxMy4xMjcyIDEuMTA4NzUgMTUuMzU4OEMxLjEzNzY2IDE2LjA1NzQgMS4yMzgxNiAxNi43NTA5IDEuNDA4NTYgMTcuNDI3NUMxLjUyOTA2IDE3Ljk0OTkgMS43NzI4NSAxOC40MzMyIDIuMTE4MTEgMTguODM0MkMyLjUyNTEyIDE5LjI1MTUgMy4wNDM5MSAxOS41MzI2IDMuNjA3MTcgMTkuNjQxQzUuNzYxNzMgMTkuOTE2MiA3LjkzMjY2IDIwLjAzMDMgMTAuMTAzMSAxOS45ODIzQzEzLjYwMDkgMjAuMDM0IDE2LjY2ODkgMTkuOTgyMyAyMC4yOTY2IDE5LjY5MjdDMjAuODczNyAxOS41OTEgMjEuNDA3MSAxOS4zMDk1IDIxLjgyNTcgMTguODg1OUMyMi4xMDU1IDE4LjU5NjIgMjIuMzE0NCAxOC4yNDE2IDIyLjQzNTMgMTcuODUxNkMyMi43OTI3IDE2LjcxNjUgMjIuOTY4MiAxNS41Mjg2IDIyLjk1NSAxNC4zMzQ4QzIyLjk5NDkgMTMuNzU1NiAyMi45OTQ5IDEwLjI1OTUgMjIuOTk0OSA5LjYzODlaTTkuNzQzMyAxNC45NTU0VjguNTUyODRMMTUuNjU5NiAxMS43Njk2QzE0LjAwMDYgMTIuNzIxMiAxMS44MTIgMTMuNzk3IDkuNzQzMyAxNC45NTU0WiIgZmlsbD0iI0YyRjJGMiIvPgo8L3N2Zz4K"
                    alt="instagram"
                  />
                </a>
              </div>
            </div>{" "}
            <div className="links-container">
              <div className="links">
                <a
                  href="/"
                  aria-current="page"
                  className="item nuxt-link-exact-active nuxt-link-active"
                >
                  <div>Home</div>
                </a>{" "}
                <a
                  href="https://blog.airtribe.live/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="item"
                >
                  <div>Blog</div>
                </a>{" "}
                <a
                  href="https://angel.co/company/airtribe"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="item"
                >
                  <div>Careers</div>
                </a>{" "}
                <a
                  href="https://airtribe.live/terms-conditions"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="item"
                >
                  <div>Terms &amp; Conditions</div>
                </a>{" "}
                <a
                  href="https://airtribe.live/privacy-policy"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="item"
                >
                  <div>Privacy Policy</div>
                </a>
              </div>{" "}
              <div className="links">
                <a
                  href="https://airtribe.live/about-us"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="item"
                >
                  <div>About Us</div>
                </a>{" "}
                <a
                  href="https://airtribe.live/contact-us"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="item"
                >
                  <div>Contact Us</div>
                </a>
              </div>
            </div>{" "}
            <div className="sign-up-container">
              <div className="message">
                Be the first in line to know about our latest courses
              </div>{" "}
              {/* <button className="sign-up">Sign up</button> */}
              <NavLink
                to="/login-register"
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
