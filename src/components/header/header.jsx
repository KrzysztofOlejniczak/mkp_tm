import React from "react";
import styles from "./header.module.css";
import logo from "./logo.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <img
            src={logo}
            className={styles.logo}
            alt="Logo Teatr Muzyczny w Łodzi"
          />
        </div>
        <h1 className={styles.heading}>Wybierz przedstawienie</h1>
      </div>
    </header>
  );
};

export default Header;
