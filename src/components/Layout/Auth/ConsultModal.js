import React, { useState } from "react";

const ConsultModal = (props) => {
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

export default ConsultModal;
