import React, { useEffect, useState } from "react";
import "../LayoutStyles/HomepageSec5.css";
import ModalPopUp from "../Auth/ModalPopUp";

const HomepageSec5 = () => {
  const [open, setOpen] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setOpen(true);
  //   }, 45000);
  // }, []);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <div class="max-width-container">
        <div className="teach-passion-banner-container">
          <div className="textual-part">
            <div className="heading-container">
              <div className="image-container">
                <div className="rocket">🚀</div>
              </div>{" "}
              <div className="card-heading">Eager to empower others?</div>{" "}
              <div className="text">
                Join us as an instructor or mentor and help learners upskill
                with your expertise
              </div>
            </div>
          </div>{" "}
          <ModalPopUp open={open} onClose={onCloseModal} />
          <button
            data-v-91eb3b7c
            className="button-container default filled primary "
            onClick={onOpenModal}
          >
            {/**/} <div data-v-91eb3b7c>Get in touch</div>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomepageSec5;
