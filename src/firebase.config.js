// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGsU1kQgntcBdNO-GNPn_yabEhxSb8YmE",
  authDomain: "house-marketplace-15a04.firebaseapp.com",
  projectId: "house-marketplace-15a04",
  storageBucket: "house-marketplace-15a04.appspot.com",
  messagingSenderId: "789141052454",
  appId: "1:789141052454:web:60ac52011274c2e1a75ae7",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
