import React, { useState } from "react";
import "./LoginStyle.css";
import { Login } from "./Login";
import { Register } from "./Register";

const LoginRegister = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="LoginRegister">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
};

export default LoginRegister;
