import React, { useState } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/pocketLearn/auth/login-register`,
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
    <div>
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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-style"
            placeholder="Email"
          />
          <i className="input-icon uil uil-at" />
        </div>
        <div className="form-group mt-2">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-style"
            placeholder="Password"
          />
          <i className="input-icon uil uil-lock-alt" />
        </div>
        <button type="submit" className="LoginBtn btn mt-4">
          Login
        </button>

        <p className="mb-0 mt-4 text-center">
          <a href="https://www.web-leb.com/code" className="link">
            Forgot your password?
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
