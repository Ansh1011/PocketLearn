import React, { useState } from "react";
import bgVid from "../ComingSoon/bg2.mp4";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import logo from "../../../images/icon/logo_vishal_02.png";
import "./LoginPageStyle.css";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/pocketLearn/login`,
        {
          email,
          password,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="vid-container">
      <Toaster />

      <video className="bgvid back" src={bgVid} autoPlay loop muted />

      <div className="inner-container">
        <form onSubmit={handleSubmit}>
          <div className="Loginbox">
            <h1>Login</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <p>Or</p>
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
            <p>
              Not a member?{" "}
              <NavLink
                href="#"
                to="/register"
                style={{ textDecoration: "none", marginLeft: "5px" }}
              >
                <span className="signup">Sign Up</span>
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
