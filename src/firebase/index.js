// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA60VY_e8hZ67TAvKgaoWOL-bxI9rCYgZA",
  authDomain: "to-do-list-2fb52.firebaseapp.com",
  projectId: "to-do-list-2fb52",
  storageBucket: "to-do-list-2fb52.appspot.com",
  messagingSenderId: "415563731563",
  appId: "1:415563731563:web:e7810d241208aac7a0d72e",
  measurementId: "G-Z8KVV5W6J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const db = getFirestore(app);

export {
  db,
}