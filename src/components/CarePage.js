import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CarePage.module.css";

import MainPage from "./MainPage";
import CalendarComponent from "./CalendarComponent";
import Record from "./Record";

function CarePage() {
  return (
    <>
      <div>
        <MainPage />
      </div>
      <div className={styles.carePage}>
        <div className={styles.calendar}>
          <CalendarComponent />
        </div>
        <div className={styles.record}>
          <Record />
        </div>
      </div>
    </>
  );
}

export default CarePage;
