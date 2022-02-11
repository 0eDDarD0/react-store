// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAu6SNois3yQw_xR3JAimgzjcasXlqZfIk",

  authDomain: "mhstore-ferlr.firebaseapp.com",

  projectId: "mhstore-ferlr",

  storageBucket: "mhstore-ferlr.appspot.com",

  messagingSenderId: "316175928127",

  appId: "1:316175928127:web:17c505f3bd149dd651e18a"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export {app, db};