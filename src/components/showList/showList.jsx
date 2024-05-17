import React, { useState } from "react";
import styles from "./showList.module.css";
import api from "../../api/show.json";
import Poster from "../poster/poster";
import left from "./left.png";
import right from "./right.png";

const ShowList = () => {
  // const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(api.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = api.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <section className={styles.container}>
        {currentItems.map((e) => {
          return <Poster id={e.id} title={e.title} img={e.img} />;
        })}
      </section>
      <div className={styles.pagination}>
        <button
          className={styles.button}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={left} alt="back" />
        </button>
        <button
          className={styles.button}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src={right} alt="next" />
        </button>
      </div>
    </>
  );
};

export default ShowList;
