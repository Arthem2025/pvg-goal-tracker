// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkZR6uy5jZq4EVl3zl95FmAiPOrbaXk5c",
  authDomain: "mobile-app---tracker.firebaseapp.com",
  projectId: "mobile-app---tracker",
  storageBucket: "mobile-app---tracker.firebasestorage.app",
  messagingSenderId: "380942075572",
  appId: "1:380942075572:web:ca5b0c8899c31b4a35b9e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)