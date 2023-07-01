import React from "react";
import "../LayoutStyles/HomepageSec1.css";
import logo from "../../../images/extra/b3.jpg";

const HomepageSec1 = () => {
  return (
    <div id="title">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h1>PocketLearn for professional excellence</h1>
            <p>
              Social learning and expert-led programs to start, transition or
              boost your career.
            </p>

            <button
              type="button"
              className="btn btn-outline-light btn-lg Download-button"
            >
              <i className="fa-brands fa-google-play" /> Download
            </button>
          </div>
          <div className="image-col col-lg-6 col-md-12">
            <img className="title-image" src={logo} alt="iphone-mockup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageSec1;
