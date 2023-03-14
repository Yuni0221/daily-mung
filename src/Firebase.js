import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByUYOttIS-CoJDNNldtvr8hmW4LL7-TEw",
  authDomain: "dailymung-f41fc.firebaseapp.com",
  projectId: "dailymung-f41fc",
  storageBucket: "dailymung-f41fc.appspot.com",
  messagingSenderId: "39627825981",
  appId: "1:39627825981:web:06c622fc978769c01d5b54",
  measurementId: "G-TC7JN8FLWZ",
};

const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const dbService = getFirestore();
export const storage = getStorage();
export const storageRef = ref();
