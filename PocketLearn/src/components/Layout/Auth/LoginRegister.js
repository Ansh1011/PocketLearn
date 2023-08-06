import React, { useState } from "react";
// import "./LoginStyle.css";
import "./LoginNew.css";
import Login from "./Login";
import logo from "../../../images/icon/logo_vishal_02.png";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { NavLink } from "react-router-dom";
import Register from "./Register";
import { Toaster } from "react-hot-toast";

const LoginRegister = () => {
  return (
    <div className="loginBody">
      <Toaster />
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
                          <Login />
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="LoginSection text-center">
                          <Register />
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
