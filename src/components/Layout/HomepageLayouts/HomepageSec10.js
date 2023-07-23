import React, { useEffect, useState } from "react";
import "../LayoutStyles/HomepageSec10.css";
import ModalPopUp from "../Auth/ModalPopUp";

const HomepageSec10 = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 45000);
  }, []);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <div className="hiring-section">
        <div className="separator" />{" "}
        <div className="hiring-box">
          <img
            alt="ripple"
            className="ripple lazyLoad isLoaded"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTg4IiBoZWlnaHQ9IjU4OCIgdmlld0JveD0iMCAwIDU4OCA1ODgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjI5NCIgY3k9IjI5NCIgcj0iMjk0IiBmaWxsPSIjQUQ5RUNFIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPGNpcmNsZSBjeD0iMjk0LjAwMiIgY3k9IjI5NCIgcj0iMjIzLjc3NyIgZmlsbD0iI0FEOUVDRSIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+CjxjaXJjbGUgY3g9IjI5NC4wMDEiIGN5PSIyOTMuOTk2IiByPSIxNDQuMTkxIiBmaWxsPSIjQUQ5RUNFIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+Cg=="
          />{" "}
          <div className="cta-container">
            <div className="heading-container">
              <img
                alt="hiring"
                className="card-image lazyLoad isLoaded"
                src="https://airtribe-strapi.s3.ap-south-1.amazonaws.com/Frame_5124_9229531c52.png"
              />{" "}
              <div className="HiringHeading">Hire talent that stands out!</div>{" "}
              <div className="sub-heading">
                With relevant skills and experience at leading companies, our
                alumni could add value to your company
              </div>
            </div>{" "}
            <button
              data-v-91eb3b7c
              className="desktop button-container default filled primary "
              onClick={onOpenModal}
            >
              <div data-v-91eb3b7c>Get in touch</div>{" "}
              <div data-v-91eb3b7c className="right-icon">
                <img
                  data-v-91eb3b7c
                  src="https://www.airtribe.live/_nuxt/img/arrowRight.da20d75.svg"
                  alt="icon"
                  className="icon"
                />
              </div>{" "}
              {/**/}
            </button>
            <ModalPopUp open={open} onClose={onCloseModal} />
          </div>{" "}
          <div className="companies-container">
            <img
              alt="Frame 44870 (1).png"
              className="company lazyLoad isLoaded"
              src="https://airtribe-strapi.s3.ap-south-1.amazonaws.com/Frame_44870_1_6ea54d4f29.png"
            />
            <img
              alt="Frame 44899.png"
              className="company lazyLoad isLoaded"
              src="https://airtribe-strapi.s3.ap-south-1.amazonaws.com/Frame_44899_2013ca090e.png"
            />
            <img
              alt="Frame 44896.png"
              className="company lazyLoad isLoaded"
              src="https://airtribe-strapi.s3.ap-south-1.amazonaws.com/Frame_44896_7c23803504.png"
            />
            <img
              alt="Frame 44897.png"
              className="company lazyLoad isLoaded"
              src="https://airtribe-strapi.s3.ap-south-1.amazonaws.com/Frame_44897_27b1234950.png"
            />
            <img
              alt="Frame 44895.png"
              className="company lazyLoad isLoaded"
              src="https://airtribe-strapi.s3.ap-south-1.amazonaws.com/Frame_44895_a18ad9106b.png"
            />
            <img
              alt="Frame 44893.png"
              className="company lazyLoad isLoaded"
              src="https://airtribe-strapi.s3.ap-south-1.amazonaws.com/Frame_44893_7f6167d1ea.png"
            />
            <img
              alt="Frame 44880.png"
              className="company lazyLoad isLoaded"
              src="https://airtribe-strapi.s3.ap-south-1.amazonaws.com/Frame_44880_83f6e8f081.png"
            />
            <img
              alt="Frame 44881.png"
              className="company lazyLoad isLoaded"
              src="https://airtribe-strapi.s3.ap-south-1.amazonaws.com/Frame_44881_be24aa11d5.png"
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default HomepageSec10;
