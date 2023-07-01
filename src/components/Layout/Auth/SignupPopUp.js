import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./LoginStyle.css";
import SignUp from "./SignUp";

const SignupPopUp = () => {
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
      <Modal
        classNames={{
          modal: "customModal",
        }}
        open={open}
        onClose={onCloseModal}
        center
        blockScroll={false}
      >
        <SignUp />
      </Modal>
    </div>
  );
};

export default SignupPopUp;
