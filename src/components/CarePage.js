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
      <div>
        <CalendarComponent />
      </div>
      <div>
        --------------주요수치-------------
        <Record />
      </div>
    </>
  );
}

export default CarePage;
