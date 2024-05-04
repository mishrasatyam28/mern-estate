// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6969f.firebaseapp.com",
  projectId: "mern-estate-6969f",
  storageBucket: "mern-estate-6969f.appspot.com",
  messagingSenderId: "539434116333",
  appId: "1:539434116333:web:e049bbc404a43fab2d98e4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
