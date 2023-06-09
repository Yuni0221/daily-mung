import React, { useState } from "react";
import styles from "./Register.module.css";
import DatePickerComponent from "./DatePickerComponent";
import { dbService, storage } from "../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadString } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function Register({ userObj }) {
  const [newUser, setNewUser] = useState(true);
  const [attachment, setAttachment] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");

  const navigate = useNavigate();

  const onChangeName = ({ target: { value } }) => {
    setName(value);
    console.log(value);
  };

  const onClickRadioButton = (e) => {
    setGender(e.target.value);
    console.log(e.target.value);
  };

  const onClickBirthday = (e) => {
    setBirthday(e.target.value);
    console.log(birthday);
  };

  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onSubmitRegist = async (e) => {
    e.preventDefault();

    if (attachment == null || attachment === "") {
      return alert("이미지를 등록해 주세요.");
    }

    const fileRef = ref(storage, `${uuidv4()}`);
    const response = await uploadString(fileRef, attachment, "data_url");
    console.log(response);

    await addDoc(collection(dbService, "dailymung-user"), {
      name,
      gender,
      birthday,
      createdAt: serverTimestamp(),
    }).then(() => {
      navigate("/main");
    });
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Regist my puppy</h2>
        <form onSubmit={onSubmitRegist}>
          <div>
            <img className={styles.image} src={attachment} alt="img" />
          </div>
          <div className={styles.title}>
            "Choose the cutest moment"
            <br />▼
          </div>

          <div>
            <input
              id="images"
              className={styles.fileButton}
              name="photo"
              type="file"
              accept="image/*"
              onChange={onFileChange}
            ></input>
            {/* <span>{`message:`}</span> */}
          </div>

          <div>
            <input
              className={styles.name}
              value={name}
              onChange={onChangeName}
              type="text"
              placeholder="Name"
              required
            ></input>
          </div>
          <div className={styles.labeled}>
            <input
              className={styles.radiobutton}
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={onClickRadioButton}
              required
            ></input>
            <label htmlFor="male">Male</label>

            <input
              className={styles.radiobutton}
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={onClickRadioButton}
              required
            ></input>
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <DatePickerComponent
              input
              type="date"
              value={birthday}
              onChange={onClickBirthday}
              required
            />
          </div>
          <input
            className={styles.regist}
            type="submit"
            value={newUser ? "Regist" : "return"}
          ></input>
        </form>
      </div>
    </>
  );
}

export default Register;
