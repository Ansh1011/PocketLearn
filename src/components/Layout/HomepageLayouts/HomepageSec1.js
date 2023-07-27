import React from "react";
import "../LayoutStyles/HomepageSec1.css";
import logo from "../../../images/undraw_online_test_re_kyfx.svg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HomepageSec1 = () => {
  const [text] = useTypewriter({
    words: ["PocketLearn!", "Practicality!", "Projects!", "Passion!"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div id="title">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            {/* <h1>PocketLearn for professional excellence</h1> */}
            <h1>
              Learn with <br />
              <span>{text}</span>
              <span>
                <Cursor cursorStyle="_" />
              </span>
            </h1>
            <h4>🔨 The Ultimate Project Arena to Ace Interviews! 🚀</h4>
            <button
              type="button"
              class="btn btn-dark btn-lg Download-button"
              style={{ backgroundColor: "#171421" }}
            >
              <i class="fa-solid fa-bars-progress"></i> View Projects
            </button>
            <button
              type="button"
              class="btn btn-outline-light btn-lg Download-button"
            >
              <i class="fa-solid fa-video"></i> View Courses
            </button>
          </div>
          <div className="image-col col-lg-6 col-md-12">
            <img className="title-image" src={logo} alt="my-gif" />
            {/* <StudentImg /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageSec1;
