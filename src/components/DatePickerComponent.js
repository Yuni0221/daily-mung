import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePickerComponent.module.css";

function DatePickerComponent() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className={styles.datePicker}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
}

export default DatePickerComponent;
