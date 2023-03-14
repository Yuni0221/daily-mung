import React, { useState, useEffect } from "react";
import styles from "./DiaryPage.module.css";
import { dbService } from "../Firebase";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

import MainPage from "./MainPage";

function DiaryPage({ userObj }) {
  const [title, setTitle] = useState();
  const [getTitle, setGetTitle] = useState([]);

  useEffect(() => {
    const q = query(
      collection(dbService, "dailymung-diary"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const diaryArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // setGetTitle(diaryArr);
      console.log(diaryArr);
    });
  });

  const onTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const onDiarySubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(dbService, "dailymung-diary"), {
      title,
    });
  };

  return (
    <>
      <div>
        <MainPage />
      </div>
      <form className={styles.diaryForm} onSubmit={onDiarySubmit}>
        <input
          className={styles.title}
          type="text"
          placeholder="Title"
          onChange={onTitleChange}
        ></input>

        <input className={styles.button} type="submit" value="Submit"></input>
      </form>

      <div>
        {getTitle.map((title) => (
          <h4>{title}</h4>
        ))}
      </div>
    </>
  );
}
export default DiaryPage;
