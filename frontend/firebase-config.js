// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4dL8v3qPatMEQwrRtwxi2F_ToJrvoLtU",
  authDomain: "prakashinterior-6f960.firebaseapp.com",
  projectId: "prakashinterior-6f960",
  storageBucket: "prakashinterior-6f960.appspot.com",
  messagingSenderId: "556337946697",
  appId: "1:556337946697:web:37cca0c115719d2c7a1f98",
  measurementId: "G-L9RGNPS4HR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);