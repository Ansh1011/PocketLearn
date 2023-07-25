import React, { useState } from "react";
// import "./LoginStyle.css";
import "./LoginNew.css";
import { Login } from "./Login";
import { Register } from "./Register";
import logo from "../../../images/icon/logo_vishal_02.png";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { NavLink } from "react-router-dom";

const LoginRegister = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    // <div className="LoginRegister">
    //   {currentForm === "login" ? (
    //     <Login onFormSwitch={toggleForm} />
    //   ) : (
    //     <Register onFormSwitch={toggleForm} />
    //   )}
    // </div>
    <div className="loginBody">
      <div className="LoginSection">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-3">
              <div className="LoginSection pb-5 pt-5 pt-sm-2 text-center">
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
                <h6 className="h6class mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log" />
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="LoginSection text-center">
                          <h4 className="mb-4 pb-3">Welcome Back</h4>
                          <div className="googleAuth">
                            <GoogleOAuthProvider clientId="317641595846-22k5afqkbqr22b1ngrolbkpn95fo6hta.apps.googleusercontent.com">
                              <GoogleLogin
                                onSuccess={(credentialResponse) => {
                                  console.log(credentialResponse);
                                }}
                                onError={() => {
                                  console.log("Login Failed");
                                }}
                              />
                            </GoogleOAuthProvider>
                          </div>
                          <br />
                          <p className="loginTxt">or Login with Email.</p>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-style"
                              placeholder="Email"
                            />
                            <i className="input-icon uil uil-at" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              className="form-style"
                              placeholder="Password"
                            />
                            <i className="input-icon uil uil-lock-alt" />
                          </div>
                          <a
                            href="https://www.web-leb.com/code"
                            className="LoginBtn btn mt-4"
                          >
                            Login
                          </a>

                          <p className="mb-0 mt-4 text-center">
                            <a
                              href="https://www.web-leb.com/code"
                              className="link"
                            >
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="LoginSection text-center">
                          <h4 className="h4class mb-3 pb-3">New here</h4>
                          <p className="loginTxt">
                            Sign up and discover a great amount of new
                            opportunities
                          </p>
                          <div className="googleAuth">
                            <GoogleOAuthProvider clientId="317641595846-22k5afqkbqr22b1ngrolbkpn95fo6hta.apps.googleusercontent.com">
                              <GoogleLogin
                                onSuccess={(credentialResponse) => {
                                  console.log(credentialResponse);
                                }}
                                onError={() => {
                                  console.log("Login Failed");
                                }}
                              />
                            </GoogleOAuthProvider>
                          </div>
                          <br />
                          <p className="loginTxt">or Sign up with email</p>

                          <div className="form-group">
                            <input
                              type="text"
                              className="form-style"
                              placeholder="Full Name"
                            />
                            <i className="input-icon uil uil-user" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="tel"
                              className="form-style"
                              placeholder="Phone Number"
                            />
                            <i className="input-icon uil uil-phone" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              className="form-style"
                              placeholder="Email"
                            />
                            <i className="input-icon uil uil-at" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              className="form-style"
                              placeholder="Password"
                            />
                            <i className="input-icon uil uil-lock-alt" />
                          </div>
                          <a
                            href="https://www.web-leb.com/code"
                            className="LoginBtn btn mt-4"
                          >
                            Register
                          </a>
                          <div className="GauthBtn"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
