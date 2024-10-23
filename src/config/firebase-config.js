// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Oua-9WUVX1JdiKfRnAuESUHaMiZDTcg",
  authDomain: "expense-tracker-c4c74.firebaseapp.com",
  projectId: "expense-tracker-c4c74",
  storageBucket: "expense-tracker-c4c74.appspot.com",
  messagingSenderId: "1031316977263",
  appId: "1:1031316977263:web:6738225744f3f45ea77f9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider()

export const db = getFirestore(app);

// firebase login

// firebase init

// firebase deploy