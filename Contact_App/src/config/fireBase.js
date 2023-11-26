// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3GlCDCNpjZdWS556MkzWicD2N7m4DUDs",
  authDomain: "contact-app-32148.firebaseapp.com",
  projectId: "contact-app-32148",
  storageBucket: "contact-app-32148.appspot.com",
  messagingSenderId: "458958526743",
  appId: "1:458958526743:web:107d650ef0b297afa3bf52",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
