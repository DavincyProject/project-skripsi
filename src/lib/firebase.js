// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQZTKkOMNMSHW7cLpQ32XOz5Fzw0k79AE",
  authDomain: "project-skripsi-67d4f.firebaseapp.com",
  databaseURL:
    "https://project-skripsi-67d4f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-skripsi-67d4f",
  storageBucket: "project-skripsi-67d4f.appspot.com",
  messagingSenderId: "752669720829",
  appId: "1:752669720829:web:b7f651b7a3d52eeab5fe94",
  measurementId: "G-M6HXV7EFBQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

// how to use?
// just import this to any file that need to using firebase
// import { app, analytics } from './path/to/firebase.js';
