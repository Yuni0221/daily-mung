import React, { useState } from "react";
import { authService } from "../Firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import styles from "./LoginPage.module.css";
import Auth from "./Auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [newAccount, setNewAccount] = useState(true);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setPasswordError(e.target.value !== password);
    setConfirmPassword(e.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    if (password !== confirmPassword) {
      return alert("비밀번호가 일치하지 않습니다.");
    } else {
      return setConfirmPassword(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.subject}>DAILY MUNG</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            className={styles.input}
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={onChangeEmail}
          ></input>
        </div>
        <div>
          <input
            className={styles.input}
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChangePassword}
          ></input>
        </div>
        <div>
          <input
            className={styles.input}
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
          ></input>
        </div>
        <input
          className={styles.button}
          type="submit"
          value={newAccount ? "Create Account" : "Log In"}
        ></input>
        <div className={styles.line}>or</div>
        <div className={styles.google}>
          <Auth />
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
