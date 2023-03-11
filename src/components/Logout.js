import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const auth = getAuth();
  const onClickLogout = () => {
    signOut(auth);
    navigate("/", { replace: true });
  };
  return (
    <>
      <button onClick={onClickLogout}>Logout</button>
    </>
  );
}

export default Logout;

// signOut(auth)
//   .then(() => {
//     // Sign-out successful.
//   })
//   .catch((error) => {
//     // An error happened.
//   });
