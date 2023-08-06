import React, { useState } from "react";
import bgVid from "../ComingSoon/bg.mp4";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import "./RegisterPageStyle.css";
import "./LoginPageStyle.css";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/pocketLearn/register`,
        {
          name,
          email,
          phone,
          password,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message + "\n Please proceed to Login.");
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

      <div className="inner-container-register">
        <form onSubmit={handleSubmit}>
          <div className="Loginbox">
            <h1>Register</h1>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
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
              Already a member?{" "}
              <NavLink
                href="#"
                to="/login"
                style={{ textDecoration: "none", marginLeft: "5px" }}
              >
                <span className="signup">Sign In</span>
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
