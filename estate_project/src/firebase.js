
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-64d34.firebaseapp.com",
  projectId: "mern-estate-64d34",
  storageBucket: "mern-estate-64d34.appspot.com",
  messagingSenderId: "238593924840",
  appId: "1:238593924840:web:ffed20eb2aa835d630b35d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);