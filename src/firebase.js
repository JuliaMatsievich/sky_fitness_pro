import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getDatabase, ref, child, get } from "firebase/database";
import { set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDqa4cOzW_N8OKaxBptQb_PqSBYbP0XN6U",
  authDomain: "sky-fitness-pro-83d20.firebaseapp.com",
  databaseURL: "https://sky-fitness-pro-83d20-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sky-fitness-pro-83d20",
  storageBucket: "sky-fitness-pro-83d20.appspot.com",
  messagingSenderId: "718553486746",
  appId: "1:718553486746:web:b0ee9323b4716e89751623"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const auth = getAuth(app);

export function getInfo() {
  getAuth(app);
}