import React, { useState } from "react";
import rocketImg from "../../../images/icon/rocket.png";
import PhoneInput from "react-phone-number-input";

const ConsultModal = (props) => {
  const [value, setValue] = useState();
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Want a free consultation? </h3>

          <img
            className="modalImg"
            src={rocketImg}
            alt=""
            style={{ width: "100px", height: "100px", marginLeft: "35%" }}
          />
          <div className="form-group mt-3">
            <label></label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            {/* <label>Phone no.</label> */}
            {/* <input
              type="text"
              className="form-control mt-1"
              placeholder="Phone no."
            /> */}
            <PhoneInput
              className="modalPhoneNo"
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
            />
          </div>
          <div className="form-group mt-3">
            {/* <label>Your Query</label> */}
            <textarea
              placeholder="Your Query"
              className="form-control mt-1"
              rows="2"
              cols="20"
              name="description"
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
