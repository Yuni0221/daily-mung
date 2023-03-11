import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import styles from "./CalendarComponent.module.css";

function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Calendar onChange={setDate} value={date} />
      <div>Selected date : {date.toDateString()} </div>
    </>
  );
}

export default CalendarComponent;
