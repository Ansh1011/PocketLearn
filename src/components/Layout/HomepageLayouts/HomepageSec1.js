import React from "react";
import "../LayoutStyles/HomepageSec1.css";
import logo from "../../../images/extra/b3.jpg";
// import StudentImg from "./HomepageImg/HomeImg";

const HomepageSec1 = () => {
  return (
    <div id="title">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h1>PocketLearn for professional excellence</h1>
            <h4>🔨 Learn Practically, Excel through Projects! 🚀</h4>
          </div>
          <div className="image-col col-lg-6 col-md-12">
            <img className="title-image" src={logo} alt="my-gif" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageSec1;
