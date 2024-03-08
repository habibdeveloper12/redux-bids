// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth';

const firebaseConfig = {
  // apiKey: "AIzaSyDabMMFUSuwlxQlOlcwdfh8hI2ehQoODWs",
  // authDomain: "bidapp-9baab.firebaseapp.com",
  // projectId: "bidapp-9baab",
  // storageBucket: "bidapp-9baab.appspot.com",
  // messagingSenderId: "359190602092",
  // appId: "1:359190602092:web:76692a56ccfd9a3450d349"
  apiKey: "AIzaSyAKfWjAWZy4rh01FM9z91FlWM7XtKAcjIE",
  authDomain: "bidproject-2579c.firebaseapp.com",
  projectId: "bidproject-2579c",
  storageBucket: "bidproject-2579c.appspot.com",
  messagingSenderId: "810557032075",
  appId: "1:810557032075:web:821ea506d53ca706a2f68e",
  measurementId: "G-6DNF933D8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;