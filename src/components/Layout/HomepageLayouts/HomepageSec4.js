import React from "react";
import "../LayoutStyles/HomepageSec4.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import amazonImg from "../../../images/creator/amazon.png";
import GoogleImg from "../../../images/creator/google.png";
import metaImg from "../../../images/creator/meta.png";
import olaImg from "../../../images/creator/Ola.png";
import paytmImg from "../../../images/creator/paytm.png";
import shopifyImg from "../../../images/creator/shopify.png";
import uberImg from "../../../images/creator/shopify.png";

import HomepageSec5 from "./HomepageSec5";
import HomepageSec6 from "./HomepageSec6";
import HomepageSec7 from "./HomepageSec7";
import HomepageSec8 from "./HomepageSec8";

const HomepageSec4 = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div>
      <div className="home-experts-section-container">
        <h2>Learn from experts at top companies</h2>

        <div className="container">
          <Slider {...settings}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={amazonImg} className="card-img-top ImgCard" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Amazon</h5>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={amazonImg} className="card-img-top ImgCard" alt="..." />
              <h5 className="card-title">Amazon</h5>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={GoogleImg} className="card-img-top ImgCard" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Rishab</h5>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={metaImg} className="card-img-top ImgCard" alt="..." />
              <div className="card-body">
                <h5 className="card-title">sancheeta</h5>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={olaImg} className="card-img-top ImgCard" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Roshan</h5>
              </div>
            </div>
          </Slider>
          <Slider {...settings}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={amazonImg} className="card-img-top ImgCard" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Nehal</h5>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={paytmImg} className="card-img-top ImgCard" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Abhishek</h5>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={shopifyImg}
                className="card-img-top ImgCard"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Rishab</h5>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={uberImg} className="card-img-top ImgCard" alt="..." />
              <div className="card-body">
                <h5 className="card-title">sancheeta</h5>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={uberImg} className="card-img-top ImgCard" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Roshan</h5>
              </div>
            </div>
          </Slider>
          <HomepageSec5 />
          <HomepageSec6 />
          <HomepageSec7 />
        </div>
      </div>
    </div>
  );
};

export default HomepageSec4;
