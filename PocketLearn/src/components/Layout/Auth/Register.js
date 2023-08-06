import React, { useState } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/pocketLearn/login-register`,
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
    <div>
      <h4 className="h4class mb-3 pb-3">New here</h4>
      <p className="loginTxt">
        Sign up and discover a great amount of new opportunities
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

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-style"
            placeholder="Full Name"
            required
          />
          <i className="input-icon uil uil-user" />
        </div>
        <div className="form-group mt-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-style"
            placeholder="Email"
            required
          />
          <i className="input-icon uil uil-at" />
        </div>
        <div className="form-group mt-2">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            className="form-style"
            placeholder="Phone Number"
            required
          />
          <i className="input-icon uil uil-phone" />
        </div>
        <div className="form-group mt-2">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-style"
            placeholder="Password"
            required
          />
          <i className="input-icon uil uil-lock-alt" />
        </div>
        <button type="submit" className="LoginBtn btn mt-4">
          Register
        </button>
        <div className="GauthBtn"></div>
      </form>
    </div>
  );
};

export default Register;
