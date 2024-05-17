import React from "react";
import styles from "./poster.module.css";

const Poster = ({ id, title, img }) => {
  return (
    <>
      <a href={`#id=${id}`}>
        <img src={img} alt={title} className={styles.poster} />
      </a>
    </>
  );
};

export default Poster;
