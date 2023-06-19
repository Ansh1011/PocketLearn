import React from "react";
import "../LayoutStyles/HomepageSec2.css";
import playbtn from "../../../images/icon/play.png";

const HomepageSec2 = () => {
  return (
    <div className="content-container">
      <div className="section-title">
        Industry-relevant programs to set you apart
      </div>{" "}
      <div className="transition-courses">
        <div>
          <div className="transition-course-card-container">
            {/**/}{" "}
            <div className="thumbnail-container">
              <img
                alt="course-Y3DCH0DTOM"
                className="bg-img lazyLoad isLoaded"
                src="https://space-mycohort-web.sgp1.cdn.digitaloceanspaces.com/phoenix/Product-Management/thumbnail.gif"
              />{" "}
              <div className="play-overlay">
                <img src={playbtn} alt="play" />
              </div>
            </div>{" "}
            <div style={{ cursor: "pointer" }}>
              <div className="course-start-time">
                <div className="date-container">
                  Starting on
                  <span className="date"> 05 July, 2023</span>
                </div>{" "}
                {/**/}
              </div>{" "}
              <div className="course-title-container">
                <div className="course-title">Product Management Launchpad</div>{" "}
                <div className="course-description">
                  Learn the skills and tools to solve real product problems.
                  Build your product portfolio and crack your next PM interview.
                  A multi-instructor course to give a holistic and well-rounded
                  approach to Product Management
                </div>
              </div>{" "}
              <div className="instructors-mentors">
                <div className="heading">
                  <span>Instructors</span> &amp; <span>Mentors</span> from
                </div>{" "}
                <div className="image-container">
                  <img
                    alt="company-logos"
                    className="lazyLoad isLoaded"
                    src="https://space-mycohort-web.sgp1.cdn.digitaloceanspaces.com/phoenix/Product-Management/home_page_company_phoenix.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="transition-course-card-container">
            {/**/}{" "}
            <div className="thumbnail-container">
              <img
                alt="course-C73TOEZKGQ"
                className="bg-img lazyLoad isLoaded"
                src="https://customer-v5xajkj3nf04d0av.cloudflarestream.com/4239fa14ade17e29085ef0ab26a0905e/thumbnails/thumbnail.gif?time=15s&height=500&duration=15s"
              />{" "}
              <div className="play-overlay">
                <img src={playbtn} alt="play" />
              </div>
            </div>{" "}
            <div style={{ cursor: "pointer" }}>
              <div className="course-start-time">
                <div className="date-container">
                  Starting on
                  <span className="date"> 12 July, 2023</span>
                </div>{" "}
                {/**/}
              </div>{" "}
              <div className="course-title-container">
                <div className="course-title">
                  Backend Engineering Launchpad
                </div>{" "}
                <div className="course-description">
                  Develop, enhance, and hone your backend engineering skills.
                  Apply your learnings to practical projects and become an
                  exceptional developer.
                </div>
              </div>{" "}
              <div className="instructors-mentors">
                <div className="heading">
                  <span>Instructors</span> &amp; <span>Mentors</span> from
                </div>{" "}
                <div className="image-container">
                  <img
                    alt="company-logos"
                    className="lazyLoad isLoaded"
                    src="https://space-mycohort-web.sgp1.cdn.digitaloceanspaces.com/phoenix/Backend-Development/company-logo-4.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageSec2;
