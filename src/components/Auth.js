import React from "react";
import styles from "./Auth.module.css";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { authService } from "../Firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Auth() {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data);
  };

  return (
    <div>
      <button
        name="google"
        className={styles.googleButton}
        onClick={onSocialClick}
      >
        <FontAwesomeIcon icon={faGoogle} />
        &nbsp;&nbsp;Sign in with Google
      </button>
    </div>
  );
}

export default Auth;
