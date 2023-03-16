import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePickerComponent.module.css";

function DatePickerComponent() {
  const [startDate, setStartDate] = useState(null);
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={styles.datePicker} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <DatePicker
      className={styles.datePicker}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      placeholderText="Select a birthday"
    />
  );
}

export default DatePickerComponent;
