import React from "react";
import style from "./device.module.css";
import microphone from "./microphone.png";

const Device = ({ id, nr, name, isMic, color }) => {
  const circleStyle = {
    backgroundColor: color,
    width: "35px",
    height: "35px",
    border: 0,
    borderRadius: "50%",
  };

  return (
    <div key={id} className={style.device}>
      <div className={style.microphone}>
        {isMic && <img src={microphone} alt="Microphone" />}
      </div>
      <p className={style.channel}>{nr}</p>
      <div style={circleStyle}></div>
      <p className={style.name}>{name}</p>
    </div>
  );
};

export default Device;
