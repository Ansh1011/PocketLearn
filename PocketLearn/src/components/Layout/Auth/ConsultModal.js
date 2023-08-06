import React, { useEffect, useState } from "react";
import rocketImg from "../../../images/icon/rocket.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ConsultModal = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("us");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/pocketLearn/`,
        {
          name,
          email,
          phone,
          query,
        }
      );
      if (res.data.success) {
        toast.success("Your Query has been registered Successfully.");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control mt-1"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group mt-3">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <PhoneInput
              style={{ width: "50px" }}
              className="phoneInput"
              country={country}
              // value={this.state.phone}
              placeholder="Phone no."
              onChange={(value) => {
                setPhone(value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            {/* <label>Your Query</label> */}
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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
