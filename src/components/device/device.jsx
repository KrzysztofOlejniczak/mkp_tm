import React from "react";
// import style from "./device.module.css";

const Device = ({ id, nr, name, isHandheld, color }) => {
  return (
    <div key={id}>
    <p>{nr} - {name}</p>
      
    </div>
  );
};

export default Device;