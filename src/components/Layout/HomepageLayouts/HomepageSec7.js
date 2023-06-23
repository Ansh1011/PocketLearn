import React from "react";
import "../LayoutStyles/HomepageSec7.css";
const HomepageSec7 = () => {
  return (
    <div>
      <div className="why-airtribe-container">
        <div className="max-width-container">
          <div className="heading">Learning problems we've all faced</div>
        </div>{" "}
        <div className="struggle-image">
          <img
            alt="struggle-image"
            className="desktop lazyLoad isLoaded"
            src="https://www.airtribe.live/_nuxt/img/home-airtribe-way-struggle-image.4cec203.png"
          />{" "}
          <img
            data-src="/_nuxt/img/home-airtribe-way-struggle-image-mobile.83c9b7c.png"
            alt="struggle-image"
            className="mobile lazyLoad"
          />
        </div>{" "}
        <div className="max-width-container">
          <div className="vertical-separator" />{" "}
          <div className="heading">
            Presenting the <span>Airtribe</span> way!
          </div>{" "}
          <div className="airtribe-way">
            <div className="item-container odd">
              <img
                alt="value-1"
                className="item-image lazyLoad isLoaded"
                src="https://www.airtribe.live/_nuxt/img/live_session_airtribeWay.8a4f1c9.svg"
              />{" "}
              <div className="item">
                <div className="item-heading">
                  Live interactive sessions by industry experts
                </div>{" "}
                <div className="item-desc">
                  Get valuable industry insights from our instructors who have
                  dedicated years to learning and unlearning.
                </div>{" "}
                <div
                  className="hue-effect"
                  style={{
                    background:
                      "linear-gradient(rgba(242, 156, 108, 0.14) 0%, rgba(242, 156, 108, 0) 100%)",
                  }}
                />
              </div>
            </div>
            <div className="item-container even">
              <img
                alt="value-2"
                className="item-image lazyLoad isLoaded"
                src="https://www.airtribe.live/_nuxt/img/mentorship_airtribeWay.dab88c9.svg"
              />{" "}
              <div className="item">
                <div className="item-heading">
                  Dedicated sessions to solve your queries
                </div>{" "}
                <div className="item-desc">
                  We offer doubt-solving sessions with mentors to help you stay
                  on track with the course.
                </div>{" "}
                <div
                  className="hue-effect"
                  style={{
                    background:
                      "linear-gradient(rgba(85, 155, 130, 0.2) 0%, rgba(59, 107, 90, 0) 100%)",
                  }}
                />
              </div>
            </div>
            <div className="item-container odd">
              <img
                alt="value-3"
                className="item-image lazyLoad isLoaded"
                src="https://www.airtribe.live/_nuxt/img/project_airtribeWay.4f6c385.svg"
              />{" "}
              <div className="item">
                <div className="item-heading">
                  Hands-on projects to apply your learnings
                </div>{" "}
                <div className="item-desc">
                  Our programs prioritize hands-on learning, with projects at
                  the end of each module to reinforce each topic.
                </div>{" "}
                <div
                  className="hue-effect"
                  style={{
                    background:
                      "linear-gradient(rgba(95, 121, 194, 0.2) 0%, rgba(95, 121, 194, 0) 100%)",
                  }}
                />
              </div>
            </div>
            <div className="item-container even">
              <img
                alt="value-4"
                className="item-image lazyLoad isLoaded"
                src="https://www.airtribe.live/_nuxt/img/community_airtribeWay.f6029de.svg"
              />{" "}
              <div className="item">
                <div className="item-heading">
                  Active community to help you grow
                </div>{" "}
                <div className="item-desc">
                  Our programs offer a college-like learning experience with a
                  supportive community of like-minded individuals
                </div>{" "}
                <div
                  className="hue-effect"
                  style={{
                    background:
                      "linear-gradient(rgba(104, 63, 190, 0.2) 0%, rgba(104, 63, 190, 0) 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageSec7;
