import React from "react";
import styles from "./Home.module.css";
import MainPage from "./MainPage";
import TextEditor from "./TextEditor";
function Home() {
  return (
    <div className={styles.div}>
      <MainPage />
    </div>
  );
}

export default Home;
