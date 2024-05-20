import React from "react";
import styles from "./poster.module.css";
import { Link } from "react-router-dom";

const Poster = ({ id, title, img }) => {
  return (
    <>
      <Link to={`show/${id}`}>
        <img src={img} alt={title} className={styles.poster} />
      </Link>
    </>
  );
};

export default Poster;
