import React from "react";
import style from "./closeBtn.module.css";
import { Link } from "react-router-dom";

const CloseBtn = ({ option }) => {
  const handleClose = () => {
    window.electron.ipcSend("close-app");
  };

  if (option === "closeApp") {
    return <button className={style.button} onClick={handleClose}></button>;
  } else {
    return (
      <Link to="/">
        <button className={style.button}></button>
      </Link>
    );
  }
};

export default CloseBtn;
