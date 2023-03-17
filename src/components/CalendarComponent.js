import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

import styles from "./CalendarComponent.module.css";
import moment from "moment";

function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Calendar
        className={styles.calendar}
        onChange={setDate}
        value={date}
        formatDay={(locale, date) => moment(date).format("DD")}
      />
      <div className={styles.selectDate}>
        Selected date : {date.toDateString()}{" "}
      </div>
    </>
  );
}

export default CalendarComponent;
