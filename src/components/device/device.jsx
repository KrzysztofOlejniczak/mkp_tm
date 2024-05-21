import React from "react";
import style from "./device.module.css";

const Device = ({ id, nr, name, isMic, color }) => {
  return (
    <div key={id}>
      <p className={style.device}>
        <span className={style.channel}>{nr}</span> {name}
      </p>
    </div>
  );
};

export default Device;
