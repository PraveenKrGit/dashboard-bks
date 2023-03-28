import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "dashboard-41f3e.firebaseapp.com",
  projectId: "dashboard-41f3e",
  storageBucket: "dashboard-41f3e.appspot.com",
  messagingSenderId: "313246460193",
  appId: "1:313246460193:web:0e29b6a75b216827d0b660",
  measurementId: "G-1Q7RECNYZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()