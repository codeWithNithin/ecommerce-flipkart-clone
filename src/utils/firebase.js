// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGDgyne7fMW_OBLt7r_tUPy5BRn9paWaw",
  authDomain: "flipkart-ecomm.firebaseapp.com",
  projectId: "flipkart-ecomm",
  storageBucket: "flipkart-ecomm.firebasestorage.app",
  messagingSenderId: "730892222107",
  appId: "1:730892222107:web:a9ad6be92d1c13f01b103e",
  measurementId: "G-K7EVRNSQM6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
