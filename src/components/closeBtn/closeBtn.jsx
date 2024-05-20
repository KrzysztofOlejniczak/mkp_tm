import React from "react";
import style from "./closeBtn.module.css";
import { Link, useLocation } from "react-router-dom";

const CloseBtn = () => {
  const location = useLocation();
  const handleClose = ({ option }) => {
    window.electron.ipcRenderer.send("close-app");
  };

  if (location === "/") {
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
