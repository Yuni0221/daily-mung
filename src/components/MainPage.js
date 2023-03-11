import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";

import Logout from "./Logout";
function MainPage() {
  return (
    <div>
      <ul>
        <li className={styles.list}>
          <Link to="/home" className={styles.link}>
            Home 🏡
          </Link>
        </li>
        <li className={styles.list}>
          <Link to="/care" className={styles.link}>
            건강관리 🧘🏻‍♀️
          </Link>
        </li>
        <li className={styles.list}>
          <Link to="/diary" className={styles.link}>
            일기 💌
          </Link>
        </li>
      </ul>
      <Logout />
    </div>
  );
}

export default MainPage;
