import React, { useState, useEffect, useRef } from "react";
import { dbService } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import styles from "./Record.module.css";

const MIN = 0;
const MAX = 1000;

function Record() {
  const [weight, setWeight] = useState("");
  const [meal, setMeal] = useState("");
  const [drink, setDrink] = useState("500");
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const onWeightChange = (e) => {
    setWeight(e.target.value);
    console.log(e.target.value);
  };

  const onMealChange = (e) => {
    setMeal(e.target.value);
    console.log(e.target.value);
  };

  const onDrinkChange = (e) => {
    setDrink(e.target.value);
    console.log(e.target.value);
  };

  const onTimeChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmitRecord = async (e) => {
    e.preventDefault();
    await addDoc(collection(dbService, "dailymung-record"), {
      weight,
      meal,
      drink,
      time,
    });
  };
  return (
    <>
      <form onSubmit={onSubmitRecord}>
        <div>Record the weight</div>
        <input type="number" step="0.01" onChange={onWeightChange}></input>
        <span> kg</span>
        <div>How much did you ate?</div>
        <input type="number" onChange={onMealChange}></input>
        <span> times</span>
        <div>How much did you drink?</div>
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={drink}
          step="100"
          onChange={onDrinkChange}
        ></input>
        <span className={styles.rangeValue}>{`${drink}ml`}</span>
        <div>
          <input onChange={onTimeChange}></input>
          <div>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
          </div>
          <button onClick={() => setRunning(true)}>start</button>
          <button onClick={() => setRunning(false)}>stop</button>
        </div>
        <div>
          <input type="submit" value="기록하기"></input>
        </div>
      </form>
      <></>
    </>
  );
}

export default Record;
