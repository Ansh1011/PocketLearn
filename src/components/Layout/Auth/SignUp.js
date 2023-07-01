import React, { useState } from "react";

const SignUp = (props) => {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = (event) => {
    event.preventDefault();
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signup") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{""}
              <button class="btn btn-link border-0" onClick={changeAuthMode}>
                Sign Up
              </button>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">
            For Free career consultation please drop{" "}
          </h3>
          {/* <div className="text-center">
            Already registered?{""}
            <button className="btn btn-link" onClick={changeAuthMode}>
              Sign In
            </button>
          </div> */}
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Phone no.</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Phone no."
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="ModalBtn btn ">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
