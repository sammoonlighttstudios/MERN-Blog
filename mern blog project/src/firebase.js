// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bb7ad.firebaseapp.com",
  projectId: "mern-blog-bb7ad",
  storageBucket: "mern-blog-bb7ad.appspot.com",
  messagingSenderId: "540879695532",
  appId: "1:540879695532:web:1f2a78b6fa2b935bd57909"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);