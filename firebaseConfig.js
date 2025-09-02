// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIb8FmAgApQXPTibX1KtDdWUxZukeudZI",
  authDomain: "mobile-app---tracker-75153.firebaseapp.com",
  projectId: "mobile-app---tracker-75153",
  storageBucket: "mobile-app---tracker-75153.firebasestorage.app",
  messagingSenderId: "519305501011",
  appId: "1:519305501011:web:80dbf709298558f68629a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)