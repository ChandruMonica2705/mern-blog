// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-13b5a.firebaseapp.com",
  projectId: "mern-blog-13b5a",
  storageBucket: "mern-blog-13b5a.appspot.com",
  messagingSenderId: "577961466756",
  appId: "1:577961466756:web:0ee36c9029762858195bd1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);