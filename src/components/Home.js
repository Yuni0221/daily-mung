import React from "react";
import styles from "./Home.module.css";
import MainPage from "./MainPage";
import Profile from "./Profile";

function Home({ userObj }) {
  return (
    <>
      <div className={styles.div}>
        <MainPage />
      </div>
      <div>
        <Profile />
      </div>
    </>
  );
}

export default Home;
