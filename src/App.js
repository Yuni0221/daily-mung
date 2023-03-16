import React, { useEffect, useState } from "react";
import { authService } from "./Firebase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import Home from "./components/Home";
import CarePage from "./components/CarePage";
import DiaryPage from "./components/DiaryPage";
import Register from "./components/Register";
import Profile from "./components/Profile";

import "./App.css";

function App({ userObj }) {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegist, setIsRegist] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route exact path="/" element={<Register />} />
            </>
          ) : (
            <Route exact path="/" element={<LoginPage />} />
          )}

          {isRegist ? (
            <>
              <Route exact path="/" element={<MainPage />} />
            </>
          ) : (
            <Route exact path="/" element={<Register />} />
          )}

          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/main" element={<MainPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/care" element={<CarePage />} />
          <Route exact path="/diary" element={<DiaryPage />} />
          <Route exact path="/regist" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
