import React, { useState, useEffect } from "react";
import styles from "./DiaryPage.module.css";
import { dbService } from "../Firebase";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import MainPage from "./MainPage";

function DiaryPage() {
  const [title, setTitle] = useState();
  const [titles, setTitles] = useState([]);

  const getDiary = async () => {
    const q = query(
      collection(dbService, "dailymung-diary"),
      orderBy("createdAt", "asc")
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const titleObj = {
        ...doc.data(),
        id: doc.id,
      };
      setTitles((prev) => [titleObj, ...prev]);
    });
  };

  useEffect(() => {
    getDiary();
  }, []);

  const onTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const onDiarySubmit = async (e) => {
    e.preventDefault();
    let newTitle = await addDoc(collection(dbService, "dailymung-diary"), {
      title,
      createdAt: serverTimestamp(),
    });
    console.log(newTitle);
    setTitles((prev) => [
      {
        title: title,
        id: newTitle.id,
      },
      ...prev,
    ]);
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
          value={title}
          placeholder="What's on your mind?"
          onChange={onTitleChange}
        ></input>

        <input className={styles.button} type="button" value="►"></input>
      </form>

      <div className={styles.post}>
        {titles.map((title) => (
          <div key={title.id}>
            <h4>{title.title}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
export default DiaryPage;
