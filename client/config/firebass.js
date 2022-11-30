// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqLnXbWXu9TiGkASS1y_gxbuk6LNtEh04",
  authDomain: "park-b1.firebaseapp.com",
  projectId: "park-b1",
  storageBucket: "park-b1.appspot.com",
  messagingSenderId: "502777767814",
  appId: "1:502777767814:web:e956ee53f68ac8c65d2e07",
  measurementId: "G-7PVH97RWHC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
