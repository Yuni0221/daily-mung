import React, { useState, useEffect } from "react";
import styles from "./DiaryPage.module.css";
import { dbService } from "../Firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
  serverTimestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";

import MainPage from "./MainPage";
import { uuidv4 } from "@firebase/util";

function DiaryPage() {
  const [title, setTitle] = useState();
  const [titles, setTitles] = useState([]);

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

    setTitles((prev) => [
      {
        title: title,
        id: newTitle.id,
      },
      ...prev,
    ]);
  };

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

  // const onDeleteClick = async () => {
  //   const ok = window.confirm("Are you sure you want to delte?");
  //   const deleteDiary = doc(dbService, "dailymung-diary");
  //   if (ok) {
  //     await deleteDoc(deleteDiary);
  //   }
  // };
  return (
    <>
      <div>
        <MainPage />
      </div>
      <h3 className={styles.maintitle}>Record your today</h3>
      <form className={styles.diaryForm} onSubmit={onDiarySubmit}>
        <input
          className={styles.title}
          type="text"
          placeholder="What's on your mind?"
          onChange={onTitleChange}
        ></input>

        <input className={styles.button} value="►" type="button"></input>
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
