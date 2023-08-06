import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./LoginStyle.css";
import CModal from "./ConsultModal";
import { Toaster } from "react-hot-toast";

const ModalPopUp = (props) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, []);

  // const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Toaster />

      <Modal
        classNames={{
          modal: "customModal",
        }}
        open={props.open}
        onClose={props.onClose}
        center
        // blockScroll={false}
      >
        <CModal />
      </Modal>
    </div>
  );
};

export default ModalPopUp;
