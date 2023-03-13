import React, { useState, useEffect } from "react";
import styles from "./DiaryPage.module.css";
import { dbService } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

import MainPage from "./MainPage";
import { set } from "date-fns";

function DiaryPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onDiaryChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onDiarySubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(dbService, "dailymung-diary"), {
      title,
      content,
    });
  };
  return (
    <>
      <div>
        <MainPage />
      </div>
      <form className={styles.diaryForm} onSubmit={onDiarySubmit}>
        <input type="text" placeholder="Title" onChange={onDiaryChange}></input>
        <input
          type="textarea"
          placeholder="Record you day"
          onChange={onContentChange}
        ></input>
        <input type="submit" value="submit"></input>
      </form>
    </>
  );
}

export default DiaryPage;
